import ProfileTemplate from "./ProfileTemplate";
import Block from "../../core/Block";
import { Button } from "../../components/Button";
import { PropsType } from "../../types";
import AuthenticationController from "../../controllers/authenticationController";
import avatar from "../../assets/images/avatar.avif";
import { BASE_URL_RESOUCES } from "../../core/HTTP";
import { AddStoreToBlock } from "../../core/AddStoreToBlock";

class Profile extends Block {
  constructor(props: PropsType) {
    console.log(props);
    const logout = new Button(
      {
        type: "button",
        text: "Выход",
        name: "logout",
        className: "custom-button",
      },
      {
        click: (event: Event) => {
          event.preventDefault();
          AuthenticationController.logout();
        },
      }
    );

    super(
      "div",
      {
        ...props,
        avatar: props.avatar ? BASE_URL_RESOUCES + props.avatar : avatar,
      },
      {
        logout,
      }
    );
  }

  render() {
    return this.compile(ProfileTemplate);
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

export default AddStoreToBlock(Profile, addStateToProps);
