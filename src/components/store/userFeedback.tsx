import * as React from "react";
import { Distribution, Feedback, FeedbackWithId } from "../../types";
import { Storage } from "../../utils/storage";

type UserFeedbackContextValue = {
    allFeedback: Array<FeedbackWithId>;
    addFeedback: (feedback: Feedback) => void;
    ratingDistribution: Array<Distribution>;
    ratingOptions: Array<number>;
};

export const UserFeedbackContext =
    React.createContext<UserFeedbackContextValue>(
        {} as UserFeedbackContextValue,
    );

export const UserFeedbackProvider = ({ children }: React.PropsWithChildren) => {
    const [allFeedback, setAllFeedback] = React.useState<Array<FeedbackWithId>>(
        [],
    );

    const ratingOptions = React.useMemo(() => [1, 2, 3, 4, 5], []);

    React.useEffect(() => {
        setAllFeedback(Storage.reviews);
    }, []);

    const addFeedback = React.useCallback(
        (comment: Feedback) => {
            const state = [
                { ...comment, id: `${allFeedback.length}-${comment.author}` },
                ...allFeedback,
            ];
            setAllFeedback(state);
            Storage.reviews = state;
        },
        [allFeedback],
    );

    const ratingDistribution = React.useMemo(() => {
        const result: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

        allFeedback.forEach(({ rating }) => {
            result[rating] = result[rating] + 1;
        });

        const distribution = Object.entries(result);

        return distribution.map(([rating, count]) => ({
            name: rating,
            percentage: (count / allFeedback.length) * 100,
        }));
    }, [allFeedback]);

    const valueProps = React.useMemo(
        () => ({
            allFeedback,
            addFeedback,
            ratingDistribution,
            ratingOptions,
        }),
        [allFeedback, addFeedback, ratingDistribution, ratingOptions],
    );

    return (
        <UserFeedbackContext.Provider value={valueProps}>
            {children}
        </UserFeedbackContext.Provider>
    );
};
