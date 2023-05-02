import Block from "../../core/Block";
import ChangePasswordTemplate from "./ChangePasswordTemplate";

class ChangePassword extends Block {
  constructor() {
    super("div", {});
  }

  render() {
    return this.compile(ChangePasswordTemplate);
  }
}

export default ChangePassword;
