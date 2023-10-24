import { expect } from "chai";
import Router from ".";
import { Block } from "../Block";
import { describe, it } from "mocha";

describe("Test Router", () => {
  class Component extends Block {
    constructor() {
      super("div");
    }

    render() {
      return this.compile("<div>Router component</div>");
    }
  }

  Router.use("/1", Component).use("/2", Component).start();

  it("should add new routes", () => {
    Router.use("/3", Component);

    console.log(window.location.href);

    expect(Router.routes.length).to.eq(3);
  });

  it("should go to a new path", () => {
    Router.go("/2");

    expect(window.location.pathname).to.eq("/2");
  });
});
