import * as React from "react";
import { Feedback } from "../../types";

interface UserFeedbackContextValue {
    feedbacks: Array<Feedback>;
    addFeedback: (feedback: Feedback) => void;
    getRatingsDistribution: () => Record<number, number>;
    ratingOptions: Array<number>;
}

export const UserFeedbackContext =
    React.createContext<UserFeedbackContextValue>(
        {} as UserFeedbackContextValue,
    );

export const UserFeedbackProvider = ({ children }: React.PropsWithChildren) => {
    const [feedbacks, setFeedbacks] = React.useState<Array<Feedback>>([]);

    const addFeedback = React.useCallback((comment: Feedback) => {
        setFeedbacks((state) => ({ ...state, comment }));
    }, []);

    const ratingOptions = React.useMemo(() => [1, 2, 3, 4, 5], []);

    const getRatingsDistribution = React.useCallback(() => {
        const result: Record<number, number> = {};

        feedbacks.forEach(({ rating }) => {
            if (!result[rating]) {
                result[rating] = 1;
            } else {
                result[rating] = result[rating] + 1;
            }
        });

        return result;
    }, [feedbacks]);

    const valueProps = React.useMemo(
        () => ({
            feedbacks,
            addFeedback,
            getRatingsDistribution,
            ratingOptions,
        }),
        [feedbacks, addFeedback, getRatingsDistribution, ratingOptions],
    );

    return (
        <UserFeedbackContext.Provider value={valueProps}>
            {children}
        </UserFeedbackContext.Provider>
    );
};
