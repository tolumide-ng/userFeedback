import { Validator } from ".";
import { Feedback } from "../../types";

describe("Validator", () => {
    it.each([
        {
            name: "author",
            value: "",
            error: "author must have at least one character",
        },
        {
            name: "author",
            value: "        ",
            error: "author must have at least one character",
        },
        {
            name: "author",
            value: "Ayobami",
            error: null,
        },
        {
            name: "email",
            value: "",
            error: "Please provide a valid email address",
        },
        {
            name: "email",
            value: "in`898320-3",
            error: "Please provide a valid email address",
        },
        {
            name: "email",
            value: "valiemail@example.com",
            error: null,
        },
        {
            name: "rating",
            value: "4",
            error: null,
        },
        {
            name: "rating",
            value: "0   ",
            error: "Please select a rating between 1 and 5",
        },
        {
            name: "rating",
            value: "6",
            error: "Please select a rating between 1 and 5",
        },
    ])("validate the value", ({ name, value, error }) => {
        expect(Validator.validate(name as keyof Feedback, value)).toBe(error);
    });
});
