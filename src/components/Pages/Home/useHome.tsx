import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Feedback } from "../../../types";
import { UserFeedbackContext } from "../../store/userFeedback";
import { Validator } from "../../../utils/validator";

type UserInput = {
    value: string;
    error: string;
};

type UserRating = {
    value: number;
    error: string;
};

type FeedbackExceptRating = Record<
    Exclude<keyof Feedback, "rating">,
    UserInput
>;

type FeedbackRating = Record<"rating", UserRating>;

export type FeedbackWithRating = FeedbackExceptRating & FeedbackRating;

function getFeedback(feedback: FeedbackWithRating): Feedback {
    const feedbackArr = Object.entries(feedback).map(([key, obj]) => [
        key,
        obj.value,
    ]);

    return Object.fromEntries(feedbackArr);
}

export const useHome = () => {
    const { addFeedback, ratingOptions } =
        React.useContext(UserFeedbackContext);

    const initialState = React.useMemo(
        () => ({
            author: { value: "", error: "" },
            email: { value: "", error: "" },
            rating: { value: 0, error: "" },
            comment: { value: "", error: "" },
        }),
        [],
    );

    const navigate = useNavigate();

    const [feedback, setFeedback] =
        React.useState<FeedbackWithRating>(initialState);

    const onChange = React.useCallback(
        (
            e: React.ChangeEvent<
                HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
            >,
        ) => {
            const { name, value } = e.target;
            const error =
                Validator.validate(name as keyof Feedback, value) ?? "";

            setFeedback((state) => ({
                ...state,
                [name]: { value, error },
            }));
        },
        [],
    );

    const onSubmit = React.useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();

            const keys = Object.keys(feedback) as Array<keyof Feedback>;

            let hasError = false;

            keys.forEach((name) => {
                const error = Validator.validate(
                    name,
                    String(feedback[name].value),
                );

                if (error) {
                    hasError = true;
                }

                setFeedback((state) => ({
                    ...state,
                    [name]: { ...state[name], error },
                }));
            });

            if (hasError) {
                return;
            } else {
                addFeedback(getFeedback(feedback));
                setFeedback(initialState);
                navigate("/comments");
            }
        },

        [addFeedback, feedback, navigate, initialState],
    );

    return {
        onChange,
        feedback,
        onSubmit,
        ratingOptions,
    };
};
