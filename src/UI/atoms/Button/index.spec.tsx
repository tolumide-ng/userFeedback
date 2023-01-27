import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { Button, ButtonType } from ".";

describe("Button", () => {
    const getProps = ({ onClick = jest.fn(), disabled = false }) => ({
        text: "Click me",
        type: "button" as ButtonType,
        onClick,
        disabled,
    });

    it("should render the component", () => {
        const props = getProps({});

        render(<Button {...props} />);

        expect(screen.getByRole("button")).toHaveTextContent(props.text);
        expect(screen.getByRole("button")).not.toBeDisabled();
    });

    it("should call the onClick handler if the user the clicks the button", async () => {
        const mockOnClick = jest.fn();
        const props = getProps({ onClick: mockOnClick });
        const user = UserEvent.setup();

        render(<Button {...props} />);

        expect(mockOnClick).not.toHaveBeenCalled();
        await user.click(screen.getByRole("button"));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it("should not the onClick handler if the button is disabled and the user clicks it", async () => {
        const mockOnClick = jest.fn();
        const props = getProps({ onClick: mockOnClick, disabled: true });
        const user = UserEvent.setup();

        render(<Button {...props} />);

        expect(mockOnClick).not.toHaveBeenCalled();
        await user.click(screen.getByRole("button"));
        expect(mockOnClick).toHaveBeenCalledTimes(0);
    });
});
