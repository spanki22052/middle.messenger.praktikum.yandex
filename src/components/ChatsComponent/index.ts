/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Block from "../../core/Block";
import template from "./ChatsComponentTemplate";
import userPicture from "../../assets/images/avatar.avif";
import moreOptions from "../../assets/images/dots.svg";
import SendMessage from "../SendMessage";
import NoSelectedChat from "../NoSelectedChatComponent";
import { PropsType, Message, StateInterface } from "../../types";
import { BASE_URL_RESOUCES } from "../../core/HTTP";
import { AddStoreToBlock } from "../../core/AddStoreToBlock";
import MessageComponent from "../Message";
import { convertDate } from "../../utils/helper";
import ChatController from "../../controllers/chatController";
import AddUsers from "../AddUsers";
import SearchedUsers from "../SearchedUsersComponent";
import DeleteUsers from "../DeleteUsers";

class ChatsComponent extends Block {
  constructor(props: PropsType) {
    const defaultPicture = userPicture;
    const sendMessage = new SendMessage({});
    const noSelectedChat = new NoSelectedChat();
    const isEmptyChat = props?.noChats === false ? props.noChats : true;

    super(
      "div",
      {
        ...props,
        isEmptyChat,
        baseUrl: BASE_URL_RESOUCES,
        activeChat: props.activeChat,
        chosenUser: props.chosenUser,
        messages: props?.messages,
        avatar: userPicture,
      },
      {
        noSelectedChat,
        sendMessage,
        defaultPicture,
        moreOptions,
        messageComponents: props.messageComponents,
      },
      {
        click: (event: Event) => {
          if ((event.target as Element).classList.contains("delete-chat")) {
            ChatController.deleteChat(
              JSON.stringify({ chatId: this.props.activeChat?.id })
            );
          }

          if ((event.target as Element).classList.contains("delete-user")) {
            SearchedUsers.setProps({
              users: [],
              selectedUsers: [],
            });

            ChatController.getChatUsers();

            DeleteUsers.setProps({
              openedPop: true,
            });
          }

          if ((event.target as Element).classList.contains("add-user")) {
            SearchedUsers.setProps({
              users: [],
              selectedUsers: [],
            });

            AddUsers.setProps({
              openedPop: !this.props.openedPop,
            });
          }

          if (
            (event.target as Element).classList.contains(
              "messages__display-content"
            )
          ) {
            AddUsers.setProps({
              openedPop: false,
            });
            DeleteUsers.setProps({
              openedPop: false,
            });
          }
        },
      }
    );

    this.children = { ...this.children };
  }

  render() {
    return this.compile(template);
  }
}

function addStateToProps(state: StateInterface) {
  const { activeChat } = state;

  const { chosenUser } = state;

  if (chosenUser) {
    return {
      isEmptyChat: false,
      chosenUser: state.chosenUser,
      activeChat: null,
      messages: [],
      avatar: this.chosenUser?.avatar || userPicture,
    };
  }

  if (!activeChat && !chosenUser) {
    return {
      isEmptyChat: true,
      chosenUser: null,
      activeChat: null,
      messages: [],
      avatar: this.chosenUser?.avatar || userPicture,
    };
  }

  const chatId = state.activeChat!.id;

  const stateNewMessages = ((state.messages as any) || {})[chatId]?.flat();

  console.log(activeChat);

  return {
    isEmptyChat: false,
    chosenUser: null,
    avatar: this.chosenUser?.avatar || userPicture,
    activeChat,
    messages:
      stateNewMessages?.map((el: Message) => {
        return new MessageComponent({
          content: el.content,
          type: el.user_id === state.user?.id ? "send" : "receive",
          time: convertDate(el.time),
        });
      }) || [],
    userId: state.user!.id,
  };
}

const chatsContent = AddStoreToBlock(ChatsComponent, addStateToProps);

export default new chatsContent();
