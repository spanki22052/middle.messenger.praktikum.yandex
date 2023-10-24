import { Block } from "../../core/Block";
import { InputWithLayout } from "../../components/InputWithLayout";
import { Button } from "../../components/Button";
import LoginTemplate from "./LoginTemplate";
import formEvents from "../../core/formEvents";
import FormValidator from "../../core/FormValidator";
import AuthenticationController from "../../controllers/authenticationController";

class Index extends Block {
  constructor() {
    const state = {};
    const login = new InputWithLayout({
      className: "input-container",
      text: "Логин",
      name: "login",
      noName: true,
    });

    const password = new InputWithLayout({
      className: "input-container",
      text: "Пароль",
      name: "password",
      type: "password",
      noName: true,
    });

    const button = new Button({
      text: "Авторизоваться",
      className: "custom-button",
    });

    super(
      "div",
      { type: "submit" },
      {
        login,
        password,
        button,
      },
      {
        input: (event: Event) => formEvents.getInput(event, state),
        submit: (event: Event) => {
          event.preventDefault();

          const form = event.target as HTMLFormElement;

          const validateForm = FormValidator.validateSubmit(form);

          const payload: { [key: string]: string } = {
            email: "",
            password: "",
          };

          Object.values(self.children).forEach((element) => {
            payload[element.props.name] = element.props.value;
          });

          const dataToString = JSON.stringify(payload);

          if (validateForm) {
            AuthenticationController.signin(dataToString, self.children);
          }
        },
      }
    );

    const self = this;
  }

  render() {
    return this.compile(LoginTemplate);
  }
}

export default Index;
