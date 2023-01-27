import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { TextArea } from ".";

describe("TextArea", () => {
    const getProps = ({
        onChange = jest.fn(),
        disabled = false,
        error = "",
    }) => ({
        name: "comment",
        placeholder: "placeholder Comment",
        value: "the typed comment",
        onChange,
        error,
        disabled,
        label: "Comment",
    });

    it("should render the textArea component", () => {
        const props = getProps({});

        render(<TextArea {...props} />);

        expect(screen.getByPlaceholderText(props.placeholder)).toBeVisible();
        expect(screen.getByRole("textbox")).toHaveTextContent(props.value);
        expect(screen.getByRole("textbox")).not.toBeDisabled();
    });

    it("should call the onChange handler when a user types", async () => {
        const mockOnChange = jest.fn();
        const user = UserEvent.setup();
        const props = getProps({ onChange: mockOnChange });

        render(<TextArea {...props} />);
        expect(mockOnChange).not.toHaveBeenCalled();
        await user.type(screen.getByRole("textbox"), "a text to display");
        expect(mockOnChange).toHaveBeenCalled();
    });

    it("should not call the onChange handler if the textarea is disabled", async () => {
        const mockOnChange = jest.fn();
        const user = UserEvent.setup();
        const props = getProps({ onChange: mockOnChange, disabled: true });

        render(<TextArea {...props} />);
        expect(mockOnChange).not.toHaveBeenCalled();
        await user.type(screen.getByRole("textbox"), "a text to display");
        expect(mockOnChange).not.toHaveBeenCalled();
    });

    it("should display an error message if it is present", () => {
        const errorMessage = "please provide a comment";
        const props = getProps({ error: errorMessage });

        render(<TextArea {...props} />);

        expect(screen.getByText(errorMessage)).toBeVisible();
    });
});
