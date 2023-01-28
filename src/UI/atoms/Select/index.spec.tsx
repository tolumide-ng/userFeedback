import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { SelectOption } from ".";

describe("SelectOption", () => {
    const getProps = ({ onChange = jest.fn() }) => ({
        onChange,
        options: [1, 2, 3, 4],
        name: "select option",
        label: "label text",
        placeholder: null,
        value: 5,
    });

    it("should render the component", () => {
        const props = getProps({});
        render(<SelectOption {...props} />);

        expect(screen.getByText(props.label)).toBeVisible();
        expect(screen.getByRole("combobox")).toBeInTheDocument();
    });

    it("should call the onChange handler when an option is selected", async () => {
        const mockOnChange = jest.fn();
        const props = getProps({ onChange: mockOnChange });
        const user = UserEvent.setup();

        render(<SelectOption {...props} />);

        expect(screen.getByRole("combobox")).toBeInTheDocument();
        expect(mockOnChange).not.toHaveBeenCalled();

        await user.selectOptions(
            screen.getByRole("combobox"),
            screen.getByRole("option", { name: "4" }),
        );
        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });
});
