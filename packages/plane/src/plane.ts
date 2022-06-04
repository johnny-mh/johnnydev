import { elementClose, elementOpen, patch, text } from "incremental-dom";

export class Plane {
  constructor(private root: HTMLElement) {
    patch(this.root, this.render.bind(this));
  }

  render(): void {
    elementOpen("h1");
    text("hello world");
    elementClose("h1");
  }
}
