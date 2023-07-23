import Block from "../Block";
import { PropsType } from "../../types";
import Store from "../Store";

export function AddStoreToBlock(
  BlockComponent: typeof Block,
  addStateToProps: (state: any) => PropsType
) {
  return class extends BlockComponent {
    constructor(props: PropsType) {
      super({ ...props, ...addStateToProps(Store.getState()) });

      Store.on("set-state", () => {
        this.setProps({ ...addStateToProps(Store.getState()) });
      });
    }
  };
}
