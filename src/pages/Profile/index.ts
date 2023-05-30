import ProfileTemplate from "./ProfileTemplate";
import Block from "../../core/Block";
import { Button } from "../../components/Button";
import { PropsType } from "../../types";
import AuthenticationController from "../../controllers/authenticationController";
import avatar from "../../assets/images/avatar.avif";

import { profile } from "../../mock-data/profile";

class Profile extends Block {
  constructor(props: PropsType) {
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
      { ...profile, avatar },
      {
        logout,
      }
    );
  }

  render() {
    return this.compile(ProfileTemplate);
  }
}

export default Profile;
