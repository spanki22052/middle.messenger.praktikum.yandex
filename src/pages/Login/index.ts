import Block from "../../core/Block";
import { InputWithLayout } from "../../components/InputWithLayout";
import { Button } from "../../components/Button";
import LoginTemplate from "./LoginTemplate";
import formEvents from "../../core/formEvents";

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
      {},
      {
        login,
        password,
        button,
      },
      {
        input: (event: Event) => formEvents.getInput(event, state),
        submit: (event: Event) => formEvents.submit(event, state),
      }
    );
  }

  render() {
    return this.compile(LoginTemplate);
  }
}

export default Index;
