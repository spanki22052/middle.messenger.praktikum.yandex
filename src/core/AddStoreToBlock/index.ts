import { PropsType } from "../../types";
import { Block } from "../Block";
import Store from "../Store";

export function AddStoreToBlock(
  BlockComponent: typeof Block,
  addStateToProps: (state: any) => PropsType
) {
  return class extends BlockComponent {
    constructor(props: PropsType) {
      super("div", { ...props, ...addStateToProps(Store.getState()) });

      Store.on("set-state", () => {
        this.setProps({ ...addStateToProps(Store.getState()) });
      });
    }
  };
}
