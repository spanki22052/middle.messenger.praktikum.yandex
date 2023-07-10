import AuthenticationAPI from "../api/authentication";

import Store from "../core/Store";

import ChatController from "./chatController";
import MessageController from "./messageController";
import GeneralController from "./generalController";

import { PropsType } from "../types";
import Router from "../core/Router";

class AuthenticationController extends GeneralController {
  constructor() {
    super();
  }

  async signup(data: XMLHttpRequestBodyInit, inputs: PropsType) {
    try {
      const response = await AuthenticationAPI.signup(data);

      if (response.status === 200) {
        this.clearInput(inputs);

        this.redirect("/messenger", 1000);

        this.getUser();
      } else {
        const errorReason = JSON.parse(response.responseText).reason;

        if (errorReason === "User already in system") {
          this.redirect("/messenger", 1000);
        }

        this.getUser();
      }
    } catch (err) {
      console.log(err);
    }
  }

  async signin(data: XMLHttpRequestBodyInit, inputs: PropsType) {
    try {
      const response = await AuthenticationAPI.signin(data);

      if (response.status === 200) {
        this.clearInput(inputs);

        this.redirect("/messenger", 1000);
        this.getUser();
      } else {
        const errorReason = JSON.parse(response.responseText).reason;

        if (errorReason === "User already in system") {
          this.redirect("/messenger", 1000);
        }
        this.getUser();
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getUser() {
    try {
      const response = await AuthenticationAPI.user();

      if (response.status === 200) {
        const userData = JSON.parse(response.response);

        Store.initState();

        Store.setState("user", userData);

        Store.setState("isAuth", true);

        ChatController.getChats();
      } else {
        Store.initState();
      }
    } catch (err) {
      console.log(err);
    }
  }

  async logout() {
    try {
      this.redirect("/", 0);
      Router.go("/");

      MessageController.close();

      Store.removeState();
    } catch (err) {
      console.log(err);
    }
  }
}

export default new AuthenticationController();
