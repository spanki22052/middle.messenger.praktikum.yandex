import { MetaPropsInterface } from "../../core/Block/types";
import Block from "../../core/Block";
import ButtonTemplate from "./ButtonTemplate";

export class Button extends Block {
  constructor(props: MetaPropsInterface) {
    super("button", props);
  }

  render() {
    return this.compile(ButtonTemplate);
  }
}
