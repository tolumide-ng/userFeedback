import * as React from "react";
import { UserFeedbackContext } from "../../store/userFeedback";
import { FeedbackResults } from "../../../UI/organisms/FeedbackResults/FeedbackResults";

export const CommentsPage = () => {
    const { allFeedback, ratingDistribution } =
        React.useContext(UserFeedbackContext);

    return (
        <FeedbackResults
            allFeedback={allFeedback}
            ratingDistribution={ratingDistribution}
        />
    );
};
