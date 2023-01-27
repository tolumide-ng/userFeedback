import { render, screen } from "@testing-library/react";
import { Comment } from ".";

describe("Comment", () => {
    it("should render the component", () => {
        const props = {
            author: "Ayobami",
            comment: "Lorem ipsum type of comment",
        };

        render(<Comment {...props} />);

        expect(screen.getByText(props.author)).toBeVisible();
        expect(screen.getByText(props.comment)).toBeVisible();
    });
});
