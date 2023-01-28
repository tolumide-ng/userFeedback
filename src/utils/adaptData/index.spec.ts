import { adaptData } from ".";
import { Feedback } from "../../types";

describe("adaptData", () => {
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

        expect(adaptData(data)).toMatchObject<Feedback>({
            author: data.author.value,
            email: data.email.value,
            comment: data.comment.value,
            rating: data.rating.value,
        });
    });
});
