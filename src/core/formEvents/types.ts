import Block from "../Block";

export interface FormEventsInterface {
  submit: (event: Event, state: { [key: string]: string }) => void;
  focus: (event: Event) => void;
  blur: (self: Block, event: Event) => void;
  getInput: (event: Event, state: { [key: string]: unknown }) => void;
}
