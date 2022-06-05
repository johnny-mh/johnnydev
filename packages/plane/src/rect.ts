import { Point } from './point';

export class Rect {
  static fromSize(width: number, height: number): Rect {
    return new Rect(new Point(0, 0), new Point(width, height));
  }

  get width(): number {
    return this.bottomRight.x - this.topLeft.x;
  }

  get height(): number {
    return this.bottomRight.y - this.topLeft.y;
  }

  constructor(public topLeft: Point, public bottomRight: Point) {}
}
