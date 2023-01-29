import { fireEvent, render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { FeedbackForm } from "./FeedbackForm";

describe("FeedbackForm", () => {
    const values = {
        author: { value: "", error: "" },
        email: { value: "", error: "" },
        comment: { value: "", error: "" },
        rating: { value: 1, error: "" },
    };

    const getProps = ({
        data = values,
        onSubmit = jest.fn(),
        onChange = jest.fn(),
    }) => ({
        onChange,
        onSubmit,
        data,
        ratingOptions: [1, 2, 3, 4],
    });

    it("should render the component", () => {
        const props = getProps({});

        render(<FeedbackForm {...props} />);

        expect(screen.getByText("Author")).toBeVisible();
        expect(screen.getByText("Email")).toBeVisible();
        expect(screen.getByText("Rating")).toBeVisible();
        expect(screen.getByText("Comment")).toBeVisible();
        expect(screen.getByRole("button")).toHaveTextContent("Submit");
        expect(screen.getAllByRole("textbox")).toHaveLength(3);
        expect(screen.getByRole("combobox")).toBeInTheDocument();
        expect(
            screen.getByRole("textbox", { name: /author/ }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole("textbox", { name: /email/ }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole("textbox", { name: /comment/ }),
        ).toBeInTheDocument();
    });

    it("should display any errors if present", () => {
        const emailError = "Sample email error message";
        const nameError = "Sample author error message";

        const modifiedValues = values;
        modifiedValues.email.error = emailError;
        modifiedValues.author.error = nameError;

        const props = getProps({ data: modifiedValues });

        render(<FeedbackForm {...props} />);

        expect(screen.getByText(emailError)).toBeVisible();
        expect(screen.getByText(nameError)).toBeVisible();
    });

    it("should call onChange if the user modifies the input", async () => {
        const mockOnChange = jest.fn();
        const user = UserEvent.setup();
        const props = getProps({ onChange: mockOnChange });

        render(<FeedbackForm {...props} />);

        expect(mockOnChange).not.toHaveBeenCalled();
        const text = "whatever";

        await user.type(screen.getByRole("textbox", { name: "author" }), text);

        expect(mockOnChange).toHaveBeenCalledTimes(text.length);
    });

    it("should call onSubmit if the user clicks on submit button", () => {
        const mockOnSubmit = jest.fn();
        const props = getProps({ onSubmit: mockOnSubmit });

        render(<FeedbackForm {...props} />);
        expect(mockOnSubmit).not.toHaveBeenCalled();

        fireEvent.submit(screen.getByText("Submit"));
        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });
});
