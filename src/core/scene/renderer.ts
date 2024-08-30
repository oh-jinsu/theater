import { Scene } from ".";
import { ActorRenderer } from "../actor/renderer";
import { RenderContext } from "../context";

export class SceneRenderer extends ActorRenderer<Scene> {
  getRenderers(): ActorRenderer<unknown>[] {
    return this.actor.children
      .map((child) => child.renderer)
      .filter(
        (renderer): renderer is ActorRenderer<unknown> => renderer !== undefined
      );
  }

  override render(context: RenderContext): void {
    for (const renderer of this.getRenderers()) {
      renderer.render(context);
    }
  }
}
