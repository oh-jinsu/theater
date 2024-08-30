export abstract class ActorController<T> {
    protected actor: T;

    constructor(actor: T) {
        this.actor = actor;
    }

    onMouseDown(event: MouseEvent) {}

    onMouseUp(event: MouseEvent) {}

    onMouseMove(event: MouseEvent) {}

    onKeyDown(event: KeyboardEvent) {}

    onKeyUp(event: KeyboardEvent) {}

    onWheel(event: WheelEvent) {}
}