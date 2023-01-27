import { render, screen } from "@testing-library/react";
import { Comment } from ".";

describe("Comment", () => {
    it("should render the component", () => {
        const props = {
            email: "Ayobami@email.com",
            comment: "Lorem ipsum type of comment",
        };

        render(<Comment {...props} />);

        expect(screen.getByText(props.email)).toBeVisible();
        expect(screen.getByText(props.comment)).toBeVisible();
    });
});
