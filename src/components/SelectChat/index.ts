/* eslint-disable @typescript-eslint/no-unused-vars */
import template from "./SelectChatComponent";

import { Block } from "../../core/Block";

import { AddStoreToBlock } from "../../core/AddStoreToBlock";

import Button from "../ButtonComponent";

import ChatController from "../../controllers/chatController";

import { BASE_URL_RESOUCES } from "../../core/HTTP";

import { StateInterface } from "../../types";
import {
  EventInterface,
  MetaPropsInterface,
  RenderElementProps,
} from "../../core/Block/types";

class SelectChat extends Block {
  constructor(
    _tagName?: string,
    props?: MetaPropsInterface,
    _renderProps?: RenderElementProps,
    _events?: EventInterface
  ) {
    const startChatButton = new Button(
      {
        type: "",
        name: "Start Chat",
      },
      {
        click: async () => {
          if (this.props.chosenUser)
            await ChatController.createChat(
              JSON.stringify({
                title: `${this.props.chosenUser?.display_name} and ${this.props.user?.first_name} ${this.props.user?.second_name}`,
              }),
              [Number(this.props.chosenUser?.id)]
            );
        },
      }
    );

    super(
      "div",
      {
        ...props,
        baseUrl: BASE_URL_RESOUCES,
        chosenUser: props?.chosenUser,
        user: props?.user,
      },
      { startChatButton }
    );
  }

  render() {
    return this.compile(template);
  }
}

function addStateToProps(state: StateInterface) {
  return {
    chosenUser: state.chosenUser,
    user: state.user,
  };
}

export default AddStoreToBlock(SelectChat, addStateToProps);
