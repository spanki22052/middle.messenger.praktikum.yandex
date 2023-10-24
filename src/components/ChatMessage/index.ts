import { Block } from "../../core/Block";
import ChatMessageTemplate from "./ChatMessageTemplate";
import { MetaPropsInterface } from "../../core/Block/types";

export class ChatMessage extends Block {
  constructor(props: MetaPropsInterface) {
    super("div", props);
  }

  render() {
    return this.compile(ChatMessageTemplate);
  }
}
