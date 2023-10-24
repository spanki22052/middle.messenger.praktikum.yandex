/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FormEventsInterface } from "./types";
import FormValidator from "../FormValidator";
import { Block } from "../Block";

const formEvents: FormEventsInterface = {
  focus: (event: Event) => {
    const targetElement = event.target as HTMLElement;

    if (targetElement?.nodeName === "INPUT") {
      const element = event.target as HTMLInputElement;
      const { error } = FormValidator.verifyElement(element);
      element.nextElementSibling!.textContent = error;
    }
  },

  blur: (self: Block, event: Event) => {
    event.preventDefault();
    event.stopPropagation();

    const element = event.target as HTMLInputElement;

    if (element.nodeName === "INPUT") {
      const { value, error } = FormValidator.verifyElement(element);
      element.nextElementSibling!.textContent = "";
      self.setProps({
        value,
        error,
      });
    }
  },
  getInput: (event: Event, state: Record<string, any>) => {
    const element = event.target as HTMLInputElement;
    const elementName = element.name;

    const { value } = element;
    Object.assign(state, { [elementName]: value });
  },

  submit: (event, state) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const validateFormContent = FormValidator.validateSubmit(form);
    let passwordValue = "";
    let repeatPasswordValue = "";
    let passwordId = "";
    let repeatPasswordId = "";

    Array.from(form.children).forEach((child) => {
      const input = child.querySelector("input");
      input?.focus();

      if (input?.id === "password" || input?.id === "newPassword") {
        passwordValue = input.value;
        passwordId = input.id;
      }
      if (input?.id === "repeatPassword" || input?.id === "repeatNewPassword") {
        repeatPasswordValue = input.value;
        repeatPasswordId = input.id;
      }
    });

    if (
      passwordValue &&
      repeatPasswordValue &&
      passwordValue !== repeatPasswordValue
    ) {
      const passwordElement = document.getElementById(passwordId);

      if (passwordElement !== null)
        passwordElement.nextElementSibling!.textContent =
          "passwords do not match";

      const repeatPasswordElement = document.getElementById(repeatPasswordId);

      if (repeatPasswordElement !== null)
        repeatPasswordElement.nextElementSibling!.textContent =
          "passwords do not match";
    }

    console.log(
      "formSubmissionStatus:",
      validateFormContent,
      "formInputValues",
      state
    );
  },
};

export default formEvents;
