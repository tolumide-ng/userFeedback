import { render, screen } from "@testing-library/react";
import { FeedbackResults } from "./FeedbackResults";
import { FeedbackWithId } from "../../../types";

jest.mock("../../molecules/Chart/Chart.tsx", () => ({
    Chart: () => {
        return <></>;
    },
}));

describe("FeedbackResults", () => {
    const getProps = ({
        allFeedback = [],
        ratingDistribution = [],
    }: {
        allFeedback?: Array<FeedbackWithId>;
        ratingDistribution?: [];
    }) => ({
        allFeedback,
        ratingDistribution,
    });

    it("should render the component", () => {
        const props = getProps({});

        render(<FeedbackResults {...props} />);

        expect(screen.getByRole("heading")).toHaveTextContent(
            "Latest Comments",
        );
    });

    it("should render appropriate text if there are no feedback", () => {
        const props = getProps({ allFeedback: [] });

        render(<FeedbackResults {...props} />);

        expect(
            screen.getByText("There are no comments at the moment"),
        ).toBeVisible();
    });

    it("should render the feedback if they exist", () => {
        const comment = {
            id: "skjbf",
            author: "anAithor",
            email: "where@example.com",
            comment: "a very long comment and what",
            rating: 2,
        };

        const props = getProps({ allFeedback: [comment] });

        render(<FeedbackResults {...props} />);

        expect(screen.getByRole("heading")).toHaveTextContent(
            "Latest Comments",
        );
        expect(
            screen.queryByText("There are no comments at the moment"),
        ).not.toBeInTheDocument();
        expect(screen.getByText(comment.email)).toBeVisible();
        expect(screen.getByText(comment.comment)).toBeVisible();
    });
});
