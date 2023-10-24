import template from "./InputTemplate";
import { Block } from "../../core/Block";
import formEvents from "../../core/formEvents";

type InputPropsType = { [key: string]: string };

export default class Input extends Block {
  constructor(props: InputPropsType) {
    super(
      "div",
      {
        ...props,
      },
      {},
      {
        focus: formEvents.focus,
        blur: (event: Event) => formEvents.blur(self, event),
      }
    );

    const self = this;
  }

  render() {
    return this.compile(template);
  }
}
