import { Block } from "../../core/Block";
import { MetaPropsInterface } from "../../core/Block/types";
import ChatSidebarBlockTemplate from "./ChatSidebarBlockTemplate";

export class ChatSidebarBlock extends Block {
  constructor(props: MetaPropsInterface) {
    super("div", props);
  }

  render() {
    return this.compile(ChatSidebarBlockTemplate);
  }
}
