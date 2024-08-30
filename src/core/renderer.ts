import { RenderContext } from "./context";
import { Scene } from "./scene";

export class Renderer {
  readonly scene: Scene;

  private rendered = false;

  protected readonly layers: HTMLCanvasElement[] = [];

  constructor(scene: Scene) {
    this.scene = scene;

    this.onResize = this.onResize.bind(this);

    window.addEventListener("resize", this.onResize);
  }

  addLayer(layer: HTMLCanvasElement) {
    this.layers.push(layer);
  }

  render() {
    if (!this.rendered) {
      this.onResize();
    }

    this.rendered = true;

    const contexts = this.layers.map((e) => e.getContext("2d")!);

    for (const context of contexts) {
      context.clearRect(
        0,
        0,
        context.canvas.width,
        context.canvas.height
      );
    }

    const context = new RenderContext(contexts, this.scene.camera);

    this.scene.renderer?.render(context);
  }

  protected onResize(): void {
    if (this.layers.length === 0) {
      return;
    }

    for (const canvas of this.layers) {
      const ratio = this.scene.camera.pixelRatio;

      canvas.width = canvas.clientWidth * ratio;

      canvas.height = canvas.clientHeight * ratio;

      const context = canvas.getContext("2d");

      if (!context) {
        return;
      }

      context.scale(ratio, ratio);
    }

    this.scene.camera.update(this.layers[0].getBoundingClientRect());

    if (this.rendered) {
      this.render();
    }
  }

  dispose() {
    window.removeEventListener("resize", this.onResize);
  }
}
