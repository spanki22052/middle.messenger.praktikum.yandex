import ChatTemplate from "./ChatTemplate";
import { Block } from "../../core/Block";
import { ChatMessage } from "../../components/ChatMessage";
import { ChatSidebarBlock } from "../../components/ChatSidebarBlock";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import formEvents from "../../core/formEvents";

class Chat extends Block {
  constructor() {
    const state = {};
    const chatMessage = new ChatMessage({ text: "Hello man", time: "20:30" });
    const chatBlock = new ChatSidebarBlock({
      name: "Андрей",
      time: "20:30",
      amount: 10,
      message: "ТЫ ЭТО ВИДЕЛ???",
      link: "/chat",
    });

    const input = new Input({
      placeholder: "Сообщение",
      name: "message",
      type: "text",
      className: "custom-input",
    });

    const button = new Button({
      text: "Отправить",
      className: "send-button",
    });

    super(
      "div",
      {},
      { chatMessage, chatBlock, input, button },
      {
        input: (event: Event) => formEvents.getInput(event, state),
        submit: (event: Event) => formEvents.submit(event, state),
      }
    );
  }

  render() {
    return this.compile(ChatTemplate);
  }
}

export default Chat;
