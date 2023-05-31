import Block from "../../core/Block";
import ChangePasswordTemplate from "./ChangePasswordTemplate";
import { Input } from "../../components/Input";
import formEvents from "../../core/formEvents";
import { Button } from "../../components/Button";

class ChangePassword extends Block {
  constructor() {
    const state = {};
    const oldPassword = new Input({
      text: "Имя",
      name: "oldPassword",
      type: "password",
    });

    const newPassword = new Input({
      text: "Фамилия",
      name: "newPassword",
      type: "password",
    });

    const repeatNewPassword = new Input({
      text: "Телефон",
      name: "newPasswordRepeat",
      type: "password",
    });

    const button = new Button({
      text: "Сохранить",
      className: "save-button",
      type: "submit",
    });
    super(
      "div",
      {},
      { oldPassword, newPassword, repeatNewPassword, button },
      {
        input: (event: Event) => formEvents.getInput(event, state),
        submit: (event: Event) => formEvents.submit(event, state),
      }
    );
  }

  render() {
    return this.compile(ChangePasswordTemplate);
  }
}

export default ChangePassword;
