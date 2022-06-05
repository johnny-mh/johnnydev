export class Point {
  static fromArray(arr: number[]): Point {
    return new Point(arr[0], arr[1]);
  }

  constructor(public x: number, public y: number) {}
}
