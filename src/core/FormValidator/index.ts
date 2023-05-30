function validateInput(value: string | number, expression: RegExp) {
  const regularExpresssion = new RegExp(expression);

  if (!value) {
    return false;
  } else {
    return regularExpresssion.test(String(value));
  }
}

function CheckValidity(
  value: string | number,
  expression: RegExp,
  message: string
): string {
  const validEntry = validateInput(value, expression);

  if (!validEntry) {
    return message;
  } else {
    return "";
  }
}

export default class FormValidator {
  static regularExpresssions = {
    login: /^(?!\d+$)[A-Za-z-_0-9]{3,20}$/,
    email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    password: /^(?=[^A-Z]*[A-Z])(?=\D*\d)[A-Za-z0-9!#%]{8,40}$/,
    name: /^[A-ZА-ЯЁ][а-яА-ЯёЁa-zA-Z-]+$/,
    phone: /^(.+\d{10,15})$/,
    message: /.+/,
  };

  static formValidationEntries: Record<string, (value: string) => string> = {
    login: (value: string) => FormValidator.validateLogin(value),
    password: (value: string) => FormValidator.validatePassword(value),
    newPassword: (value: string) => FormValidator.validatePassword(value),
    confirmPassword: (value: string) => FormValidator.validatePassword(value),
    oldPassword: (value: string) => FormValidator.validatePassword(value),
    phone: (value: string) => FormValidator.validatePhoneNumber(value),
    email: (value: string) => FormValidator.validateEmail(value),
    message: (value: string) => FormValidator.validateMessage(value),
    first_name: (value: string) => FormValidator.validateName(value),
    second_name: (value: string) => FormValidator.validateName(value),
    password_repeat: (value: string) => FormValidator.validatePassword(value),
    newPasswordRepeat: (value: string) => FormValidator.validatePassword(value),
  };

  static validateInput(value: string | number, expression: RegExp) {
    const regularExpresssion = new RegExp(expression);

    if (!value) {
      return false;
    } else {
      return regularExpresssion.test(String(value));
    }
  }

  static validateLogin(value: string) {
    const expression = FormValidator.regularExpresssions.login;
    return CheckValidity(
      value,
      expression,
      "Должен содержать от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов "
    );
  }

  static validateEmail(value: string) {
    const expression = FormValidator.regularExpresssions.email;
    return CheckValidity(value, expression, "Неверно введен Email");
  }

  static validateName(value: string) {
    const expression = FormValidator.regularExpresssions.name;

    return CheckValidity(
      value,
      expression,
      "Первая буква должна начинаться с большой буквы."
    );
  }

  static validatePassword(value: string) {
    const expression = FormValidator.regularExpresssions.password;

    return CheckValidity(
      value,
      expression,
      "Пароль должен состоять от 8 до 40 символов. Должен содержать хотя бы одну большую и одно число "
    );
  }

  static validateMessage(value: string) {
    const expression = FormValidator.regularExpresssions.message;

    return CheckValidity(value, expression, "Пустое сообщение");
  }

  static validatePhoneNumber(value: string) {
    const expression = FormValidator.regularExpresssions.phone;

    return CheckValidity(
      value,
      expression,
      "Неверно введен номер телефона он должен начинаться с +"
    );
  }

  static validateSubmit(form: HTMLFormElement) {
    const elements: HTMLInputElement[] = Array.from(form).map(
      (el) => el as HTMLInputElement
    );

    let valid = true;

    for (const element of elements) {
      if (element.nodeName === "INPUT") {
        const { error } = FormValidator.verifyElement(element);

        if (error.length > 0) {
          valid = false;
        }
      }
    }

    return valid;
  }

  static verifyElement(element: HTMLInputElement): { [key: string]: string } {
    const { name, value } = element;

    if (FormValidator.formValidationEntries[name]) {
      const error = FormValidator.formValidationEntries[name](value);
      return { value, error };
    }

    return { value };
  }
}
