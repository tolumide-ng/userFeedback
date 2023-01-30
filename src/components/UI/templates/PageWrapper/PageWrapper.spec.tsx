import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PageWrapper } from "./PageWrapper";

describe("PageWrapper", () => {
    it("should render the component", () => {
        render(
            <MemoryRouter>
                <PageWrapper />
            </MemoryRouter>,
        );

        expect(screen.getByText("Feedback Form")).toBeVisible();
    });
});
