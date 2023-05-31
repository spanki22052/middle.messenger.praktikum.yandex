import Block from "../../core/Block";
import EditProfileTemplate from "./EditProfileTemplate";
import { Input } from "../../components/Input";
import formEvents from "../../core/formEvents";
import { Button } from "../../components/Button";

class EditProfile extends Block {
  constructor() {
    const state = {};

    const email = new Input({
      text: "Почта",
      name: "email",
      type: "email",
    });

    const login = new Input({
      text: "Логин",
      name: "login",
      type: "text",
    });

    const firstName = new Input({
      text: "Имя",
      name: "first_name",
      type: "text",
    });

    const secondName = new Input({
      text: "Фамилия",
      name: "second_name",
      type: "text",
    });

    const phone = new Input({
      text: "Телефон",
      name: "phone",
      type: "text",
    });

    const button = new Button({
      text: "Сохранить",
      className: "save-button",
      type: "submit",
    });

    super(
      "div",
      {},
      { email, login, firstName, secondName, button, phone },
      {
        input: (event: Event) => formEvents.getInput(event, state),
        submit: (event: Event) => formEvents.submit(event, state),
      }
    );
  }

  render() {
    return this.compile(EditProfileTemplate);
  }
}

export default EditProfile;
