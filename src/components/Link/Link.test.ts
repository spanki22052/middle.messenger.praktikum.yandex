import { describe } from "mocha";
import { expect } from "chai";
import Router from "../../core/Router";
import { Link } from ".";
import Sinon from "sinon";

describe("Test Link component", () => {
  it("should render Link component", () => {
    new Link({ path: "/" });
  });

  it("should go to the clicked path", () => {
    const link = new Link({ path: "/" });
    // eslint-disable-next-line import/no-named-as-default-member
    const spy = Sinon.spy(Router, "go");
    const element = link.element as HTMLAnchorElement;

    element.click();

    expect(spy.calledOnce).to.eq(true);
  });

  it("should return HTMLAnchorElement", () => {
    const link = new Link({ path: "/" });
    const { element } = link;

    expect(element).to.be.instanceOf(window.HTMLAnchorElement);
  });
});
