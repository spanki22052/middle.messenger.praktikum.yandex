import Block from "../../core/Block";
import template from "./ChatSearchInputTemplate";
import UserProfileController from "../../controllers/userProfileController";
import { Button } from "../Button";
import { PropsType } from "../../types";

export default class ChatSearchInput extends Block {
  constructor(props: PropsType) {
    const searchButton = new Button({
      text: "Найти",
      className: "custom-search-button",
    });

    super(
      "div",
      props,
      { searchButton },
      {
        input: (event: Event) => {
          const element = event.target as HTMLInputElement;

          const searchedLogin = element.value;

          if (searchedLogin.length === 0) UserProfileController.clearUsers();
          else
            UserProfileController.searchUserByLogin(
              JSON.stringify({ login: searchedLogin })
            );
        },
      }
    );
  }

  render() {
    return this.compile(template);
  }
}
