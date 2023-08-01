export class PaintingContext {
  canvas: CanvasRenderingContext2D;
}

export class Offset {
  dx: number;
  dy: number;
}

export class Constraints {
  minWidth: number;
  maxWidth: number;
  minHeight: number;
  maxHeight: number;
}

export abstract class AbstractNode {
  depth: number;
  attached: boolean;
  parent?: AbstractNode;
}

export enum RenderObjectType {
  TEXT,
  IMAGE,
  RECTANGLE,
  CIRCLE,
  BOX,
  VIEW,
}

export class RenderObject {
  type: RenderObjectType;
  private _constraints: Constraints;
  layout(constraints: Constraints): void {
    if (constraints === this._constraints) return;
    this._constraints = constraints;
    this.performLayout();
  }
  performLayout(): void {}
}

export class TextRenderObject extends RenderObject {
  type: RenderObjectType.TEXT;
}

export class ImageRenderObject extends RenderObject {
  type: RenderObjectType.IMAGE;
}

export class RectangleRenderObject extends RenderObject {
  type: RenderObjectType.RECTANGLE;
}

export class CircleRenderObject extends RenderObject {
  type: RenderObjectType.CIRCLE;
}

export class RenderBox extends RenderObject {
  type: RenderObjectType.BOX;
}

export class RenderView extends RenderObject {
  type: RenderObjectType.VIEW;
}
