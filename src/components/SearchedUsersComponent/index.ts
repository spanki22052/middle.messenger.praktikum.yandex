/* eslint-disable @typescript-eslint/no-non-null-assertion */
import template from "./SearchedUsersTemplate";
import { Block } from "../../core/Block";

//@ts-ignore
import avatar from "../../assets/images/avatar.avif";

import { BASE_URL_RESOUCES } from "../../core/HTTP";

import { PropsType } from "../../types";

class SearchedUsers extends Block {
  constructor(props: PropsType) {
    super(
      "div",
      {
        ...props,
        baseUrl: BASE_URL_RESOUCES,
        avatar,
        selectedUsers: [],
        users: props.users,
      },
      {},
      {
        click: (event: Event) => {
          if ((event.target! as Element).classList.contains("add-select")) {
            const user = (event.target! as Element).closest(
              "#chat_list_click"
            ) as HTMLElement;

            const selectUserId = Number(user.dataset.userId);

            const chosenUser = this.props?.users?.filter(
              (user: PropsType) => selectUserId === user.id
            );

            const isSelected = this.props.selectedUsers?.find(
              (user: PropsType) => selectUserId === user.id
            );

            if (!isSelected && this.props.selectedUsers && chosenUser) {
              const selectedUsers = [
                ...this.props.selectedUsers,
                ...chosenUser,
              ];

              this.setProps({
                selectedUsers,
                users: this.props.users?.filter(
                  (user: PropsType) => selectUserId !== user.id
                ),
              });
            }
          }

          if ((event.target! as Element).classList.contains("remove-select")) {
            const user = (event.target! as Element).closest(
              "#chat-user-selected"
            ) as HTMLElement;

            const selectUserId = Number(user.dataset.userId);

            const chosenUser = this.props.selectedUsers?.filter(
              (user: PropsType) => selectUserId === user.id
            );

            const unSelectedUsers = this.props.selectedUsers?.filter(
              (user: PropsType) => selectUserId === user.id
            );

            const selectedUsers = unSelectedUsers ? [...unSelectedUsers] : [];
            const users =
              chosenUser && this.props.users
                ? [...chosenUser, ...this.props.users]
                : [];

            this.setProps({
              selectedUsers,
              users,
            });
          }
        },
      }
    );
  }

  render() {
    return this.compile(template);
  }
}

export default new SearchedUsers({});
