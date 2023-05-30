import { MetaPropsInterface } from "../../core/Block/types";
import Block from "../../core/Block";
import ButtonTemplate from "./ButtonTemplate";

export class Button extends Block {
  constructor(
    props: MetaPropsInterface,
    events?: { [key: string]: (event: Event) => void }
  ) {
    super("button", props, {}, events);
  }

  render() {
    return this.compile(ButtonTemplate);
  }
}
