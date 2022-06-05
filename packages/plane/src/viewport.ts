import { Point } from './point';
import { Rect } from './rect';

export class Viewport extends Rect {
  constructor(root: HTMLElement) {
    const { clientWidth, clientHeight } = root;

    super(new Point(0, 0), new Point(clientWidth, clientHeight));
  }
}
