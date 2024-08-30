export { ActorController } from "./controller";
export { ActorRenderer } from "./renderer";

import { Scene } from "../scene";
import { ActorController } from "./controller";
import { ActorRenderer } from "./renderer";

export type ActorData = {}

export abstract class Actor<T extends ActorData = ActorData> {
  data: T;

  scene!: Scene;

  controller?: ActorController<unknown>;

  renderer?: ActorRenderer<unknown>;

  constructor(data: T) {
    this.data = data;
  }

  enter(): void {}

  update(): void {}

  exit(): void {}
}
