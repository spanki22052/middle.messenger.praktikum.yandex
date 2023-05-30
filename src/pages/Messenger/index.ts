import Block from "../../core/Block";
import MessengerTemplate from "./MessengerTemplate";
import { ChatMessage } from "../../components/ChatMessage";
import { ChatSidebarBlock } from "../../components/ChatSidebarBlock";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import formEvents from "../../core/formEvents";
import ChatSearchInput from "../../components/ChatSearchInput";
import AddUsers from "../../components/AddUsers";
import ChatList from "../../components/ChatListComponent";
import { PropsType } from "../../types";
import { AddStoreToBlock } from "../../core/AddStoreToBlock";
import Store from "../../core/Store";
import ChatsComponent from "../../components/ChatsComponent";

class Messenger extends Block {
  constructor() {
    Store.setState("activeChat", null);
    const chatMessage = new ChatMessage({ text: "Hello man", time: "20:30" });

    const chatList = ChatList;
    const chatSearch = new ChatSearchInput();
    super(
      "div",
      {},
      { chatMessage, AddUsers, chatList, chatSearch, ChatsComponent }
    );
  }

  render() {
    return this.compile(MessengerTemplate);
  }
}

function addStateToProps(state: PropsType) {
  if (state.chats) {
    const { chats } = state;
    return {
      chats,
    };
  } else {
    return {
      chats: [],
    };
  }
}

export default AddStoreToBlock(Messenger, addStateToProps);
