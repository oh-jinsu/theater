import { Camera, Renderer, Scene, Ticker } from "../core";
import { HelloActor } from "./actor";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <canvas id="canvas" width="800" height="600"></canvas>
`;

const canvas = document.querySelector<HTMLCanvasElement>("#canvas")!;

const camera = new Camera();

const scene = new Scene(camera);

scene.add(new HelloActor());

const renderer = new Renderer(scene);

renderer.addLayer(canvas);

const ticker = new Ticker();

ticker.start(() => {
  scene.update();

  renderer.render();
});
