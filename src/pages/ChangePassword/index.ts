import Block from "../../core/Block";
import ChangePasswordTemplate from "./ChangePasswordTemplate";
import { Input } from "../../components/Input";

class ChangePassword extends Block {
  constructor() {
    const oldPassword = new Input({
      text: "Имя",
      name: "password",
      type: "password",
    });

    const newPassword = new Input({
      text: "Фамилия",
      name: "password",
      type: "password",
    });

    const repeatNewPassword = new Input({
      text: "Телефон",
      name: "password",
      type: "password",
    });

    super("div", {}, { oldPassword, newPassword, repeatNewPassword });
  }

  render() {
    return this.compile(ChangePasswordTemplate);
  }
}

export default ChangePassword;
