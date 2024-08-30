import { Camera } from "./camera";

export class RenderContext {
  protected camera: Camera;

  layer = 0;

  protected readonly contexts: CanvasRenderingContext2D[];

  constructor(contexts: CanvasRenderingContext2D[], camera: Camera) {
    this.contexts = contexts;

    this.camera = camera;
  }

  get canvas() {
    return this.current.canvas;
  }

  get current() {
    return this.contexts[this.layer];
  }

  get fillStyle(): string | CanvasGradient | CanvasPattern {
    return this.current.fillStyle;
  }

  set fillStyle(value: string | CanvasGradient | CanvasPattern) {
    this.current.fillStyle = value;
  }

  get strokeStyle(): string | CanvasGradient | CanvasPattern {
    return this.current.strokeStyle;
  }

  set strokeStyle(value: string | CanvasGradient | CanvasPattern) {
    this.current.strokeStyle = value;
  }

  get lineWidth(): number {
    return this.current.lineWidth;
  }

  set lineWidth(value: number) {
    this.current.lineWidth = value;
  }

  get direction(): CanvasDirection {
    return this.current.direction;
  }

  set direction(value: CanvasDirection) {
    this.current.direction = value;
  }

  get font(): string {
    return this.current.font;
  }

  set font(value: string) {
    this.current.font = value;
  }

  get textAlign(): CanvasTextAlign {
    return this.current.textAlign;
  }

  set textAlign(value: CanvasTextAlign) {
    this.current.textAlign = value;
  }

  get textBaseline(): CanvasTextBaseline {
    return this.current.textBaseline;
  }

  set textBaseline(value: CanvasTextBaseline) {
    this.current.textBaseline = value;
  }

  beginPath(): void {
    return this.current.beginPath();
  }

  closePath(): void {
    return this.current.closePath();
  }

  fill(): void {
    return this.current.fill();
  }

  stroke(path?: Path2D): void {
    if (path) {
      return this.current.stroke(path);
    }

    return this.current.stroke();
  }

  setLineDash(segments: number[]): void {
    return this.current.setLineDash(segments);
  }

  drawImage(
    image: CanvasImageSource,
    dx: number,
    dy: number,
    dw: number,
    dh: number
  ): void {
    return this.current.drawImage(image, dx, dy, dw, dh);
  }

  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    counterclockwise?: boolean,
    crispy = true
  ): void {
    if (!crispy) {
      return this.current.arc(
        x,
        y,
        radius,
        startAngle,
        endAngle,
        counterclockwise
      );
    }

    return this.current.arc(
      Math.trunc(x) + this.lineWidth * 0.5,
      Math.trunc(y) + this.lineWidth * 0.5,
      Math.trunc(radius),
      startAngle,
      endAngle,
      counterclockwise
    );
  }

  arcTo(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    radius: number,
    crispy = true
  ): void {
    if (!crispy) {
      return this.current.arcTo(x1, y1, x2, y2, radius);
    }

    return this.current.arcTo(
      Math.trunc(x1) + this.lineWidth * 0.5,
      Math.trunc(y1) + this.lineWidth * 0.5,
      Math.trunc(x2) + this.lineWidth * 0.5,
      Math.trunc(y2) + this.lineWidth * 0.5,
      radius
    );
  }

  lineTo(x: number, y: number, crisp = true): void {
    if (!crisp) {
      return this.current.lineTo(x, y);
    }

    return this.current.lineTo(
      Math.trunc(x) + this.lineWidth * 0.5,
      Math.trunc(y) + this.lineWidth * 0.5
    );
  }

  moveTo(x: number, y: number, crispy = true): void {
    if (!crispy) {
      return this.current.moveTo(x, y);
    }

    return this.current.moveTo(
      Math.trunc(x) + this.lineWidth * 0.5,
      Math.trunc(y) + this.lineWidth * 0.5
    );
  }

  points(points: { x: number; y: number }[], crispy = true): void {
    if (points.length === 0) {
      return;
    }

    for (let i = 0; i < points.length; i++) {
      this.lineTo(points[i].x, points[i].y, crispy);
    }
  }

  fillRect(x: number, y: number, w: number, h: number, crispy = true): void {
    if (!crispy) {
      return this.current.fillRect(x, y, w, h);
    }

    return this.current.fillRect(
      Math.trunc(x) + this.lineWidth * 0.5,
      Math.trunc(y) + this.lineWidth * 0.5,
      w,
      h
    );
  }

  strokeRect(x: number, y: number, w: number, h: number, crispy = true): void {
    if (!crispy) {
      return this.current.strokeRect(x, y, w, h);
    }

    return this.current.strokeRect(
      Math.trunc(x) + this.lineWidth * 0.5,
      Math.trunc(y) + this.lineWidth * 0.5,
      Math.trunc(w),
      Math.trunc(h)
    );
  }

  polygon(points: { x: number; y: number }[], crispy = true): void {
    if (points.length === 0) {
      return;
    }

    this.points(points, crispy);

    this.lineTo(points[0].x, points[0].y, crispy);
  }

  bezierCurveTo(
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number
  ): void {
    return this.current.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  }

  ellipse(
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    counterclockwise?: boolean
  ): void {
    return this.current.ellipse(
      x,
      y,
      radiusX,
      radiusY,
      rotation,
      startAngle,
      endAngle,
      counterclockwise
    );
  }

  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void {
    return this.current.quadraticCurveTo(cpx, cpy, x, y);
  }

  clearRect(x: number, y: number, w: number, h: number): void {
    return this.current.clearRect(x, y, w, h);
  }

  reset(): void {
    return this.current.reset();
  }

  restore(): void {
    return this.current.restore();
  }

  save(): void {
    return this.current.save();
  }

  fillText(text: string, x: number, y: number, maxWidth?: number): void {
    return this.current.fillText(text, this.camera.toScreenX(x), this.camera.toScreenY(y), maxWidth);
  }

  measureText(text: string): TextMetrics {
    return this.current.measureText(text);
  }

  strokeText(text: string, x: number, y: number, maxWidth?: number): void {
    return this.current.strokeText(text, x, y, maxWidth);
  }

  getTransform(): DOMMatrix {
    return this.current.getTransform();
  }

  resetTransform(): void {
    return this.current.resetTransform();
  }

  rotate(angle: number): void {
    return this.current.rotate(angle);
  }

  scale(x: number, y: number): void {
    return this.current.scale(x, y);
  }

  setTransform(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number
  ): void {
    return this.current.setTransform(a, b, c, d, e, f);
  }

  transform(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number
  ): void {
    return this.current.transform(a, b, c, d, e, f);
  }

  translate(x: number, y: number): void {
    return this.current.translate(x, y);
  }
}
