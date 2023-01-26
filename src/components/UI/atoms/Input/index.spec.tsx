import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from ".";

describe("Input", () => {
    const getProps = ({
        onChange = jest.fn(),
        disabled = false,
        value = "",
    }) => ({
        name: "email",
        required: true,
        placeholder: "Email",
        type: "email",
        value,
        onChange,
        disabled,
    });

    it("should render the component", () => {
        const props = getProps({});

        render(<Input {...props} />);

        expect(screen.getByPlaceholderText(props.placeholder)).toBeVisible();
        expect(screen.getByRole("textbox")).not.toBeDisabled();
        expect(screen.getByRole("textbox")).toBeRequired();
    });

    it("should call onChange when a user types", async () => {
        const mockOnChange = jest.fn();
        const props = getProps({ onChange: mockOnChange });
        const user = userEvent.setup();

        render(<Input {...props} />);

        expect(mockOnChange).not.toHaveBeenCalled();
        await user.type(screen.getByRole("textbox"), "name@example.com");
        expect(mockOnChange).toHaveBeenCalled();
    });

    it("should not call onChange if disabled is true", async () => {
        const mockOnChange = jest.fn();
        const props = getProps({ onChange: mockOnChange, disabled: true });
        const user = userEvent.setup();

        render(<Input {...props} />);

        expect(mockOnChange).not.toHaveBeenCalled();
        await user.type(screen.getByRole("textbox"), "sampleemail@example.com");
        expect(mockOnChange).not.toHaveBeenCalled();
    });
});
