import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Header } from "./Header";

describe("Header", () => {
    it("should render the Header component", () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>,
        );

        expect(screen.getByText("Feedback Form")).toBeVisible();
        expect(screen.queryByText("Feedback Results")).not.toBeInTheDocument();
        expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });

    it("should display the appropriate title and content for a route", () => {
        render(
            <MemoryRouter initialEntries={["/comments"]}>
                <Header />
            </MemoryRouter>,
        );

        expect(screen.getByText("Feedback Results")).toBeVisible();
        expect(screen.getByRole("link")).toHaveTextContent("Go back");
        expect(screen.getByRole("link")).toHaveAttribute("href", "/");
        expect(screen.getByRole("button")).not.toBeDisabled();
    });
});
