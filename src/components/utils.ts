import { Feedback } from "../types";

export class Validator {
    static validate(name: keyof Feedback, value: string): string {
        const trimmedValue = value.trim();
        const hasError = Validator.#checkLength(name, trimmedValue);

        if (!hasError && name === "email") {
            return Validator.#validateEmail(trimmedValue);
        }

        return hasError;
    }

    static #validateEmail(value: string) {
        const email =
            /^\w+([.-]?\w+)+@\w+([.:]?\w+)+(\.[a-zA-Z0-9]{2,})+$/.test(value);

        if (!email) {
            return "Please provide a valid email address";
        }

        return "";
    }

    static #checkLength(name: keyof Feedback, value: string) {
        if (!value) {
            return `${name} must have at least one character`;
        }

        return "";
    }
}
