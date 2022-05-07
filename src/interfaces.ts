export type WindowStateType = "opened" | "closed" | "fullscreen" | "clicked";

export interface ContentInterface {
  url: string;
  name: string;
  author: string;
  windowState: WindowStateType;
  originalX: number | string;
  originalY: number | string;
  order: number;
  theme: string;
}
