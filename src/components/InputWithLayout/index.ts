import { MetaPropsInterface } from "../../core/Block/types";
import { Block } from "../../core/Block";
import InputWithLayoutTemplate from "./InputWithLayoutTemplate";
import formEvents from "../../core/formEvents";

export class InputWithLayout extends Block {
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
    return this.compile(InputWithLayoutTemplate);
  }
}
