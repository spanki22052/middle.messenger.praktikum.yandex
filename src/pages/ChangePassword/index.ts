import { Block } from "../../core/Block";
import ChangePasswordTemplate from "./ChangePasswordTemplate";
import { Input } from "../../components/Input";
import formEvents from "../../core/formEvents";
import { Button } from "../../components/Button";
import avatar from "../../assets/images/avatar.avif";
import { PropsType } from "../../types";
import FormValidator from "../../core/FormValidator";
import UserProfileController from "../../controllers/userProfileController";
import { AddStoreToBlock } from "../../core/AddStoreToBlock";
import { BASE_URL_RESOUCES } from "../../core/HTTP";

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
      { avatar: avatar },
      { oldPassword, newPassword, repeatNewPassword, button },
      {
        input: (event: Event) => formEvents.getInput(event, state),
        submit: (event: Event) => {
          event.preventDefault();

          const formElement = event.target as HTMLFormElement;
          const validateForm = FormValidator.validateSubmit(formElement);

          const payload: PropsType = {
            oldPassword: "",
            newPassword: "",
          };

          Object.values(self.children).forEach((child) => {
            payload[child.props.name] = child.props.value;
          });

          if (validateForm) {
            UserProfileController.editPassword(
              JSON.stringify(payload),
              self.children
            );
          }
        },
      }
    );
    const self = this;
  }

  render() {
    return this.compile(ChangePasswordTemplate);
  }
}

function addStateToProps(state: PropsType) {
  const { user } = state;
  if (user) {
    return {
      avatar: user.avatar ? BASE_URL_RESOUCES + user.avatar : avatar,
    };
  } else {
    return {
      avatar: null,
    };
  }
}

export default AddStoreToBlock(ChangePassword, addStateToProps);
