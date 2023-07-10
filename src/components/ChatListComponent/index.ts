/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Block from "../../core/Block";
import template from "./ChatListTemplate";

import UserProfileController from "../../controllers/userProfileController";
import ChatController from "../../controllers/chatController";

import { BASE_URL_RESOUCES } from "../../core/HTTP";

//@ts-ignore
import avatar from "../../assets/images/avatar.avif";
import { StateInterface } from "../../types";
import { AddStoreToBlock } from "../../core/AddStoreToBlock";
import Store from "../../core/Store";

type ChatListProps = { [key: string]: string };
class ChatList extends Block {
  constructor(props: ChatListProps[] | any) {
    super(
      "div",
      {
        ...props,
        baseUrl: BASE_URL_RESOUCES,
        isUsers: false,
        users: [],
        avatar: avatar,
      },
      {},
      {
        click: (event: Event) => {
          const clickedUser = event.target as Element;

          const clickedUserInfo = clickedUser.closest(
            ".chat-search-user"
          ) as HTMLElement;

          if (clickedUserInfo && clickedUserInfo.dataset) {
            const id = clickedUserInfo.dataset.userId as string;

            UserProfileController.findUserById(id);
          }

          const selectChat = clickedUser.closest(
            "#chat_list_click"
          ) as HTMLElement;

          if (selectChat && selectChat.dataset) {
            const id = selectChat.dataset.chatId as string;

            const title = selectChat.querySelector(
              ".chats-list__single-sender-name"
            )!.textContent;

            if (id) ChatController.startChating(id, title);
            else {
              const storeUser = Store.getState().chosenUser;

              if (storeUser)
                ChatController.createChat(
                  JSON.stringify({
                    title: storeUser?.displayName
                      ? storeUser.displayName
                      : storeUser?.title || "Hello",
                  }),
                  [storeUser.id]
                );
            }
          }
        },
      }
    );
  }

  render() {
    return this.compile(template);
  }
}

function addStateToProps(state: StateInterface) {
  let isChats;

  isChats = state.chats?.length > 0;

  const chats = state.chats;

  return { chats, isChats };
}

const chatList = AddStoreToBlock(ChatList, addStateToProps);

export default new chatList({});
