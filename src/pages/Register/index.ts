import Block from "../../core/Block";
import { RegisterPageTemplate } from "./RegisterPageTemplate";
import { InputWithLayout } from "../../components/InputWithLayout";
import { Button } from "../../components/Button";
import formEvents from "../../core/formEvents";

class Register extends Block {
  constructor() {
    const state = {};
    const email = new InputWithLayout({
      name: "email",
      id: "email",
      type: "email",
      className: "input-container",
      label: "Email",
      placeholder: "E-mail",
      value: "",
      error: "",
    });

    const login = new InputWithLayout({
      name: "login",
      id: "login",
      type: "login",
      label: "Login",
      className: "input-container",
      placeholder: "Логин",
      value: "",
      error: "",
    });

    const firstName = new InputWithLayout({
      name: "first_name",
      id: "first_name",
      type: "first_name",
      className: "input-container",
      label: "First Name",
      placeholder: "Имя",
      value: "",
      error: "",
    });

    const secondName = new InputWithLayout({
      name: "second_name",
      id: "second_name",
      className: "input-container",
      type: "second_name",
      label: "Second Name",
      placeholder: "Фамилия",
      value: "",
      error: "",
    });

    const phone = new InputWithLayout({
      name: "phone",
      id: "phone",
      className: "input-container",
      type: "phone",
      label: "Phone",
      placeholder: "Телефон",
      value: "",
      error: "",
    });

    const password = new InputWithLayout({
      name: "password",
      id: "password",
      type: "password",
      label: "Password",
      className: "input-container",
      placeholder: "Пароль",
      value: "",
      error: "",
    });

    const repeatPassword = new InputWithLayout({
      name: "password",
      id: "repeatPassword",
      className: "input-container",
      type: "password",
      label: "Repeat password",
      placeholder: "Пароль (еще раз)",
      value: "",
      error: "",
    });

    const button = new Button({
      type: "submit",
      text: "Регистрация",
    });

    super(
      "div",
      {},
      {
        email,
        login,
        firstName,
        secondName,
        phone,
        password,
        repeatPassword,
        button,
      },
      {
        input: (event: Event) => formEvents.getInput(event, state),
        submit: (event: Event) => formEvents.submit(event, state),
      }
    );
  }

  render() {
    return this.compile(RegisterPageTemplate);
  }
}

export default Register;
