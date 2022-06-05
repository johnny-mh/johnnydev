import { elementClose, elementOpen, patch, text } from 'incremental-dom';
import { Rect } from './rect';
import { Viewport } from './viewport';

export interface IPlaneOptions {
  groundSize?: { width?: number; height?: number };
}

interface IViewModel {
  spacePressed: boolean;
  ground: {
    rect: Rect;
  };
}

class Plane {
  vm: IViewModel;
  viewport: Viewport;

  constructor(private root: HTMLElement, private options?: IPlaneOptions) {
    this.viewport = new Viewport(root);

    const opt = this.normalizeOptions();

    this.vm = {
      spacePressed: false,
      ground: { rect: Rect.fromSize(0, 0), ...opt.vm.ground },
    };

    this.update();
    this.bindGlobalEvents();
  }

  update(): void {
    patch(this.root, this.render);
  }

  destroy(): void {
    document.removeEventListener('keydown', this.onKeyDown);
    document.removeEventListener('keyup', this.onKeyUp);
    this.root.childNodes.forEach(node => node.remove());
  }

  private render = (): void => {
    const {
      spacePressed,
      ground: { rect },
    } = this.vm;

    elementOpen(
      'div',
      null,
      null,
      'class',
      spacePressed ? 'pnl-viewport pnl-space-pressed' : 'pnl-viewport'
    );
    elementOpen(
      'div',
      null,
      ['class', 'pnl-ground'],
      'style',
      `width: ${rect.width}px; height: ${rect.height}px;`
    );
    text('hello world');
    elementClose('div');
    elementClose('div');
  };

  private bindGlobalEvents(): void {
    const doc = document;

    doc.addEventListener('keydown', this.onKeyDown);
    doc.addEventListener('keyup', this.onKeyUp);
  }

  private onKeyDown = (e: KeyboardEvent): void => {
    if (document.activeElement === document.body && e.key === ' ') {
      e.preventDefault();
      this.vm.spacePressed = true;
    }

    this.update();
  };

  private onKeyUp = (e: KeyboardEvent): void => {
    if (
      document.activeElement === document.body &&
      e.key === ' ' &&
      this.vm.spacePressed
    ) {
      this.vm.spacePressed = false;
    }

    this.update();
  };

  private normalizeOptions(): { vm: Partial<IViewModel> } {
    const { viewport, options } = this;

    const width = options?.groundSize?.width ?? viewport.width;
    const height = options?.groundSize?.height ?? viewport.height;
    const groundSize = Rect.fromSize(width, height);

    return { vm: { ground: { rect: groundSize } } };
  }
}

export function plane(root: HTMLElement, options?: IPlaneOptions): Plane {
  return new Plane(root, options);
}
