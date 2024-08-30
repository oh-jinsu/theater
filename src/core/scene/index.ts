import { Actor } from "../actor";
import { Camera } from "../camera";
import { SceneController } from "./controller";
import { SceneRenderer } from "./renderer";

export class Scene extends Actor {
  camera: Camera;

  protected _children: Actor[] = [];

  get children(): Actor[] {
    return this._children;
  }

  override controller = new SceneController(this);

  override renderer = new SceneRenderer(this);

  readonly queue: Function[] = [];

  constructor(camera: Camera) {
    super({});

    this.camera = camera;
  }

  override update(): void {
    for (const child of this._children) {
      child.update();
    }
  }

  add(...actor: Actor[]): void {
    for (const child of actor) {
      child.scene = this;

      child.enter();
    }

    this._children.push(...actor);
  }

  remove(...actor: Actor[]): void {
    for (const child of actor) {
      child.exit();
    }

    this._children = this._children.filter((child) => !actor.includes(child));
  }
}
