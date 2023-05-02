import Block from "../../core/Block";
import { MetaPropsInterface } from "../../core/Block/types";

export class Link extends Block {
  constructor(props: MetaPropsInterface) {
    super("div", props);
  }

  render() {
    return `<a href=${this.props?.href || this._meta.props.href}>${
      this.props?.text || this._meta.props.text
    } </a>`;
  }
}

export const genLink = (props: MetaPropsInterface) => {
  return new Link(props).getContent();
};
