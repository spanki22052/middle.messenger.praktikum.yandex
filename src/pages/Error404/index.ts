import Block from "../../core/Block";
import Error404Template from "./Error404Template";

class Error404 extends Block {
  constructor() {
    super("div");
  }

  render() {
    return this.compile(Error404Template);
  }
}

export default Error404;
