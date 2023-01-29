import { Feedback } from "../../types";

export class Validator {
    static validate(name: keyof Feedback, value: string): string | null {
        const trimmedValue = value.trim();

        if (name === "rating") {
            return Validator.#isWithinRange(Number(trimmedValue));
        }

        if (name === "email") {
            return Validator.#isValidEmail(trimmedValue);
        }

        return Validator.#checkLength(name, trimmedValue);
    }

    static #isWithinRange(value: number) {
        if (value > 0 && value <= 5) {
            return null;
        } else {
            return "please select a rating between 1 and 5";
        }
    }

    static #isValidEmail(value: string) {
        const email =
            /^\w+([.-]?\w+)+@\w+([.:]?\w+)+(\.[a-zA-Z0-9]{2,})+$/.test(value);

        if (!email) {
            return "please provide a valid email address";
        }

        return null;
    }

    static #checkLength(name: keyof Feedback, value: string) {
        if (!value) {
            return `${name} must have at least one character`;
        }

        return null;
    }
}
