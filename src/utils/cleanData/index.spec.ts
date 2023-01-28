import { cleanData } from ".";
import { Feedback } from "../../types";

describe("cleanData", () => {
    it("should return Feedback", () => {
        const data = {
            author: {
                value: "",
                error: "an error message",
            },
            email: {
                value: "email@",
                error: "not valid",
            },
            comment: {
                value: "comment",
                error: "",
            },
            rating: {
                value: 5,
                error: "",
            },
        };

        expect(cleanData(data)).toMatchObject<Feedback>({
            author: data.author.value,
            email: data.email.value,
            comment: data.comment.value,
            rating: data.rating.value,
        });
    });
});
