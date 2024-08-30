import { Scene } from ".";
import { ActorController } from "../actor/controller";

export class SceneController extends ActorController<Scene> {
  getControllers(): ActorController<unknown>[] {
    return this.actor.children
      .map((child) => child.controller)
      .filter(
        (controller): controller is ActorController<unknown> =>
          controller !== undefined
      );
  }

  override onMouseDown(event: MouseEvent): void {
    for (const controller of this.getControllers()) {
      controller.onMouseDown(event);
    }
  }

  override onMouseUp(event: MouseEvent): void {
    for (const controller of this.getControllers()) {
      controller.onMouseUp(event);
    }
  }

  override onMouseMove(event: MouseEvent): void {
    for (const controller of this.getControllers()) {
      controller.onMouseMove(event);
    }
  }

  override onKeyDown(event: KeyboardEvent): void {
    for (const controller of this.getControllers()) {
      controller.onKeyDown(event);
    }
  }

  override onKeyUp(event: KeyboardEvent): void {
    for (const controller of this.getControllers()) {
      controller.onKeyUp(event);
    }
  }

  override onWheel(event: WheelEvent): void {
    for (const controller of this.getControllers()) {
      controller.onWheel(event);
    }
  }
}
