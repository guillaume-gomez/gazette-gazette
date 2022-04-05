export type WindowStateType = "opened" | "closed" | "fullscreen" | "clicked";

export interface ContentInterface {
  url: string;
  name: string;
  authorLink?: string;
  windowState: WindowStateType;
  originalX: number | string;
  originalY: number | string;
  order: number;
}
