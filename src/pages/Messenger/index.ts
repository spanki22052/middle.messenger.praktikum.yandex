import Block from "../../core/Block";
import MessengerTemplate from "./MessengerTemplate";
import ChatSearchInput from "../../components/ChatSearchInput";
import AddUsers from "../../components/AddUsers";
import ChatList from "../../components/ChatListComponent";
import { PropsType } from "../../types";
import { AddStoreToBlock } from "../../core/AddStoreToBlock";
import Store from "../../core/Store";
import ChatsComponent from "../../components/ChatsComponent";
import DeleteUsers from "../../components/DeleteUsers";

class Messenger extends Block {
  constructor() {
    Store.setState("activeChat", null);

    const chatList = ChatList;
    const chatSearch = new ChatSearchInput();

    super(
      "div",
      {},
      { AddUsers, chatList, chatSearch, ChatsComponent, DeleteUsers }
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
