/* eslint-disable @typescript-eslint/no-explicit-any */
import template from "./ButtonTemplate";
import Block from "../../core/Block";

export default class Button extends Block {
  constructor(
    props: Record<string, any>,
    events?: { [key: string]: (event: Event) => void }
  ) {
    super(
      "div",
      {
        ...props,
      },
      {},
      { ...events }
    );
  }

  render() {
    return this.compile(template);
  }
}
