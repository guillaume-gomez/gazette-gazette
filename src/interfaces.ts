export type WindowStateType = "opened" | "closed" | "fullscreen";

export interface ContentInterface {
  url: string;
  name: string;
  windowState: WindowStateType;
}
