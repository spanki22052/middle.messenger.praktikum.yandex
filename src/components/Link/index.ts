import Block from "../../core/Block";
import { MetaPropsInterface } from "../../core/Block/types";
import Router from "../../core/Router";
import ChatController from "../../controllers/chatController";
import linkTemplate from "./linkTemplate";

export class Link extends Block {
  constructor(props: MetaPropsInterface) {
    super(
      "div",
      props,
      {},
      {
        click: (event: Event) => {
          event.preventDefault();
          Router.go(props.href);

          if (props.href === "/messenger") {
            ChatController.leaveChatPage();
          }
        },
      }
    );
  }

  render() {
    return this.compile(linkTemplate);
  }
}
