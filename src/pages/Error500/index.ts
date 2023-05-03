import Block from "../../core/Block";
import Error500Template from "./Error500Template";

class Error500 extends Block {
  constructor() {
    super("div");
  }

  render() {
    return this.compile(Error500Template);
  }
}

export default Error500;
