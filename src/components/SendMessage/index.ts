import Block from "../../core/Block";
import template from "./SendMessageTemplate";
// import { formEvents } from "../../core/formEvents";
import MessageController from "../../controllers/messageController";
import FormValidator from "../../core/FormValidator";

export default class SendMessage extends Block {
  constructor(props: { [key: string]: string }) {
    super(
      "div",
      {
        ...props,
      },
      {},
      {
        submit: (event: Event) => {
          event.preventDefault();

          const messageInput = event.target as HTMLFormElement;
          const messageInputElement = messageInput.querySelector(
            "#message"
          ) as HTMLInputElement;

          const messageInputName = messageInputElement.name as string;
          const validateForm = FormValidator.validateSubmit(messageInput);

          const input = messageInput.elements[
            messageInputName as any
          ] as HTMLInputElement;

          const { error } = FormValidator.verifyElement(input);

          if (validateForm) {
            MessageController.sendMessage(input.value);

            this.setProps({
              value: "",
              error: "",
            });
          } else {
            this.setProps({
              ...this.props,
              error,
            });
          }
        },
      }
    );
  }

  render() {
    return this.compile(template);
  }
}
