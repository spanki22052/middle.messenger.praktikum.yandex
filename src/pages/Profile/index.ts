import ProfileTemplate from "./ProfileTemplate";
import Block from "../../core/Block";

class Profile extends Block {
  constructor() {
    super("div", {});
  }

  render() {
    return this.compile(ProfileTemplate);
  }
}

export default Profile;
