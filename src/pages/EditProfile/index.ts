/* eslint-disable @typescript-eslint/no-unused-vars */
import { Block } from "../../core/Block";
import EditProfileTemplate from "./EditProfileTemplate";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import avatar from "../../assets/userAvatar";
import { PropsType } from "../../types";
import FormValidator from "../../core/FormValidator";
import UserProfileController from "../../controllers/userProfileController";
import EditablePicture from "../../components/EditablePicture";
import { BASE_URL_RESOUCES } from "../../core/HTTP";
import ExitButton from "../../components/ExitButtonComponent";
import { Link } from "../../components/Link";
import { AddStoreToBlock } from "../../core/AddStoreToBlock";
import {
  EventInterface,
  MetaPropsInterface,
  RenderElementProps,
} from "../../core/Block/types";

class EditProfile extends Block {
  constructor(
    _tagName?: string,
    props?: MetaPropsInterface,
    _renderProps?: RenderElementProps,
    _events?: EventInterface
  ) {
    const defaultPicture = avatar;
    const userPicture = new EditablePicture({
      avatar: props?.avatar ? props.avatar : defaultPicture,
    });

    const exitButton = new ExitButton({
      path: "/profile",
    });

    const email = new Input({
      label: "Email",
      id: "email",
      name: "email",
      type: "email",
      value: props?.email,
      error: "",
    });
    const login = new Input({
      label: "Login",
      id: "login",
      name: "login",
      type: "text",
      value: props?.login,
      error: "",
    });
    const firstName = new Input({
      label: "First Name",
      id: "firstName",
      name: "first_name",
      type: "text",
      value: props?.first_name,
      error: "",
    });
    const secondName = new Input({
      label: "Second Name",
      id: "secondName",
      name: "second_name",
      type: "text",
      value: props?.second_name,
      error: "",
    });
    const phone = new Input({
      label: "Phone",
      id: "phone",
      name: "phone",
      type: "tel",
      value: props?.phone,
      error: "",
    });

    const button = new Button({
      text: "Сохранить",
      className: "save-button",
      type: "submit",
    });

    const linkToPassword = new Link({
      text: "Изменить пароль",
      href: "/settings/password",
      className: "custom-link",
    });

    super(
      "div",
      {
        ...props,
        avatar: props?.avatar ? BASE_URL_RESOUCES + props.avatar : avatar,
      },
      {
        email,
        login,
        firstName,
        secondName,
        button,
        phone,
        exitButton,
        linkToPassword,
        userPicture,
      },
      {
        submit: (event: Event) => {
          event.preventDefault();

          const form = event.target as HTMLFormElement;

          const validateInputs = FormValidator.validateSubmit(form);

          console.log(validateInputs);

          const payload: PropsType = {
            first_name: "",
            second_name: "",
            display_name: "",
            login: "",
            email: "",
            password: "",
            phone: "",
          };

          Object.values(this.children).forEach((element) => {
            payload[element.props.name] = String(element.props.value || "");
          });
          console.log(payload);

          if (validateInputs) {
            UserProfileController.editProfile(JSON.stringify(payload));
          }
        },
      }
    );
  }

  render() {
    return this.compile(EditProfileTemplate);
  }
}

function addStateToProps(state: PropsType) {
  const { user } = state;
  if (user) {
    return {
      login: user.login,
      email: user.email,
      first_name: user.first_name,
      second_name: user.second_name,
      display_name: `${user.first_name} ${user.second_name} `,
      phone: user.phone,
      avatar: user.avatar ? BASE_URL_RESOUCES + user.avatar : avatar,
    };
  } else {
    return {
      login: null,
      email: null,
      first_name: null,
      second_name: null,
      display_name: null,
      phone: null,
      avatar: null,
    };
  }
}

export default AddStoreToBlock(EditProfile, addStateToProps);
