import { Actor, ActorController } from "../core/actor";
import { ActorRenderer } from "../core/actor/renderer";
import { RenderContext } from "../core/context";

export class HelloActor extends Actor {
  override controller = new HelloController(this);

  override renderer = new HelloRenderer(this);

  constructor() {
    super({});
  }
}

export class HelloController extends ActorController<HelloActor> {}

export class HelloRenderer extends ActorRenderer<HelloActor> {
  render(context: RenderContext): void {
    context.font = "24px sans-serif";

    context.fillStyle = "black";

    context.fillText("Hello, World!", 0, 0);
  }
}
