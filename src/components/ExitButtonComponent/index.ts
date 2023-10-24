import template from "./ExitButtonTemplate";
import { Block } from "../../core/Block";
import ChatController from "../../controllers/chatController";
import Router from "../../core/Router";
import { PropsType } from "../../types";

export default class ExitButton extends Block {
  constructor(props: PropsType) {
    super(
      "div",
      props,
      {},
      {
        click: (event: Event) => {
          event.preventDefault();
          Router.go(props.path);

          ChatController.leaveChatPage();
        },
      }
    );
  }

  render() {
    return this.compile(template);
  }
}
