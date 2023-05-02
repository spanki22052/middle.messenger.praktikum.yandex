import Block from "../../core/Block";
import EditProfileTemplate from "./EditProfileTemplate";

class EditProfile extends Block {
  constructor() {
    super("div", {});
  }

  render() {
    return this.compile(EditProfileTemplate);
  }
}

export default EditProfile;
