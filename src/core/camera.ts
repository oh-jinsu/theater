import { Point } from "@flatten-js/core";

export class Camera {
  protected rect: DOMRect;

  offset: Point = new Point(0, 0);

  constructor(rect: DOMRect = new DOMRect(0, 0, 1, 1)) {
    this.rect = rect;
  }

  readonly pixelRatio = window.devicePixelRatio;

  update(rect: DOMRect) {
    this.rect = rect;
  }

  fromScreen(x: number, y: number): Point {
    return new Point(this.fromScreenX(x), this.fromScreenY(y));
  }

  fromScreenX(x: number): number {
    return x;
  }

  fromScreenY(y: number): number {
    return y;
  }

  toScreenX(x: number): number {
    return x;
  }

  toScreenY(y: number): number {
    return y;
  }

  toScreen({ x, y }: Point): Point {
    return new Point(this.toScreenX(x), this.toScreenY(y));
  }
}
