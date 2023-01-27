import * as React from "react";
import { Distribution, Feedback, FeedbackWithId } from "../../types";
import { storage } from "../../utils/localStorage";

interface UserFeedbackContextValue {
    allFeedback: Array<FeedbackWithId>;
    addFeedback: (feedback: Feedback) => void;
    ratingDistribution: Array<Distribution>;
    ratingOptions: Array<number>;
}

const HIGHEST_RATING = 5;

export const UserFeedbackContext =
    React.createContext<UserFeedbackContextValue>(
        {} as UserFeedbackContextValue,
    );

export const UserFeedbackProvider = ({ children }: React.PropsWithChildren) => {
    const [allFeedback, setAllFeedback] = React.useState<Array<FeedbackWithId>>(
        [],
    );

    React.useEffect(() => {
        setAllFeedback(storage.get());
    }, []);

    const addFeedback = React.useCallback(
        (comment: Feedback) => {
            const state = [
                { id: `${allFeedback.length}-${comment.author}`, ...comment },
                ...allFeedback,
            ];
            setAllFeedback(state);
            storage.update(state);
        },
        [allFeedback],
    );

    const ratingOptions = React.useMemo(() => [1, 2, 3, 4, 5], []);

    const ratingDistribution = React.useMemo(() => {
        const result: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

        allFeedback.forEach(({ rating }) => {
            result[rating] = result[rating] + 1;
        });

        const distribution = Object.entries(result);

        return distribution.map(([rating, v]) => ({
            name: rating,
            percentage: v,
            total: distribution.length * HIGHEST_RATING,
            value: v,
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
