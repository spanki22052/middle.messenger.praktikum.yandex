import Block from "../../core/Block";
import { MetaPropsInterface } from "../../core/Block/types";
import formEvents from "../../core/formEvents";
import InputTemplate from "./InputTemplate";

export class Input extends Block {
  constructor(props: MetaPropsInterface) {
    super(
      "input",
      props,
      {},
      {
        focus: formEvents.focus,
        blur: (event: Event) => formEvents.blur(self, event),
      }
    );

    const self = this;
  }

  render() {
    return this.compile(InputTemplate);
  }
}
