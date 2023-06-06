import EventBus from "../EventBus";
import { StateInterface } from "../../types";
import { parseInternalJSON, set } from "../../utils/helper";

class Store extends EventBus {
  appState: StateInterface = {
    isAuth: false,
    user: null,
    noChats: true,
    chosenUser: null,
    activeChat: null,
    messages: {},
    chats: [],
  };

  initState() {
    localStorage.setItem("currentState", JSON.stringify(this.appState));

    this.emit("set-state", this.appState);
  }

  getState() {
    const state = localStorage.getItem("currentState");

    if (state) {
      return parseInternalJSON(state);
    } else {
      return {};
    }
  }

  removeState() {
    this.appState = {
      isAuth: false,
      user: null,
      noChats: true,
      chosenUser: null,
      activeChat: null,
      messages: {},
      chats: [],
    };
    localStorage.removeItem("currentState");
  }

  setState(path: string, value: unknown) {
    this.appState = this.getState();
    const updatedState = set(this.appState, path, value);

    localStorage.setItem("currentState", JSON.stringify(updatedState));

    this.emit("set-state", updatedState);
  }
}

export default new Store();
