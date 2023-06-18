/* eslint-disable @typescript-eslint/no-non-null-assertion */
import template from "./AddUsersTemplate";

import Block from "../../core/Block";
import Store from "../../core/Store";

import UserProfileController from "../../controllers/userProfileController";
import ChatController from "../../controllers/chatController";
import SearchedUsers from "../SearchedUsersComponent";

import { PropsType } from "../../types";
import { Input } from "../Input";
import { Button } from "../Button";
import ChatList from "../ChatListComponent";

class AddUser extends Block {
  constructor(props: PropsType) {
    const searchInput = new Input({
      id: "search",
      name: "search",
      type: "text",
      className: "chat-searchbar",
      placeholder: "Найти",
      value: "",
    });

    const button = new Button({
      type: "submit",
      text: "Добавить пользователя",
      className: "custom-search-button",
    });

    super(
      "div",
      {
        ...props,
        openedPop: false,
      },
      {
        searchInput,
        button,
        SearchedUsers,
      },
      {
        click: (event: Event) => {
          if ((event.target! as Element).classList.contains("opened")) {
            this.setProps({ openedPop: false });
          }
        },
        input: (event: Event) => {
          if ((event.target! as Element).id === "search") {
            const element = event.target as HTMLInputElement;

            const { value } = element;

            if (value.length === 0) {
              UserProfileController.clearUsers(SearchedUsers);
            } else {
              try {
                const jsonString = JSON.stringify({ login: value });
                UserProfileController.searchUserByLogin(
                  jsonString,
                  SearchedUsers
                );
              } catch (error) {
                console.error(error);
              }
            }
          }
        },
        submit: (event: Event) => {
          event.preventDefault();
          const chatId = Store.getState().activeChat?.id;

          document.querySelector(".chat-searchbar").setAttribute("value", "");

          const selectedUserId = SearchedUsers.props.selectedUsers.map(
            (select: PropsType) => select.id
          );

          const request = JSON.stringify({
            users: [...selectedUserId],
            chatId,
          });

          ChatController.addUsersToChat(request);
          UserProfileController.searchUserByLogin("clear", SearchedUsers);
        },
      }
    );
  }

  render() {
    return this.compile(template);
  }
}

export default new AddUser({});
