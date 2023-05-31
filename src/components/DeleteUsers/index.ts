/* eslint-disable @typescript-eslint/no-non-null-assertion */
import template from "./DeleteUsersTemplate";
import Block from "../../core/Block";
import SearchedUsers from "../SearchedUsersComponent";
import Button from "../ButtonComponent";
import ChatController from "../../controllers/chatController";
import { PropsType } from "../../types";

class DeleteUsers extends Block {
  constructor(props: PropsType) {
    const button = new Button({
      type: "submit",
      name: "Delete User",
    });

    super(
      "div",
      {
        ...props,
        button,
        openedPop: false,
        SearchedUsers,
      },
      {},
      {
        click: (event: Event) => {
          if ((event.target! as Element).classList.contains("opened")) {
            this.setProps({ openedPop: false });
          }
        },

        submit: (event: Event) => {
          event.preventDefault();

          const userIds = SearchedUsers.props.selectedUsers.map(
            (user: PropsType) => user.id
          );

          ChatController.deleteUsersFromChat(userIds);
        },
      }
    );
  }

  render() {
    return this.compile(template);
  }
}

export default new DeleteUsers({});
