import { RenderContext } from "../context";

export abstract class ActorRenderer<T> {
    protected actor: T;

    constructor(actor: T) {
        this.actor = actor;
    }

    abstract render(context: RenderContext): void;
}