import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Feedback } from "../../../types";
import { UserFeedbackContext } from "../../store/userFeedback";
import { Validator } from "../../utils";

interface UserInput {
    value: string;
    error: string;
}

interface UserRating {
    value: number;
    error: string;
}

type FeedbackExceptRating = Record<
    Exclude<keyof Feedback, "rating">,
    UserInput
>;

type RatingFeedback = Record<"rating", UserRating>;

// type FeedbackInput = Record<keyof Feedback, UserInput>;

export type FeedbackInputWithRating = FeedbackExceptRating & RatingFeedback;

export const useHome = () => {
    const { addFeedback, ratingOptions } =
        React.useContext(UserFeedbackContext);

    const initialState = React.useMemo(
        () => ({
            author: { value: "", error: "" },
            email: { value: "", error: "" },
            rating: { value: ratingOptions[0], error: "" },
            comment: { value: "", error: "" },
        }),
        [ratingOptions],
    );

    const navigate = useNavigate();

    const [feedback, setFeedback] =
        React.useState<FeedbackInputWithRating>(initialState);

    const onChange = React.useCallback(
        (
            e: React.ChangeEvent<
                HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
            >,
        ) => {
            const { name, value } = e.target;
            let error = Validator.validate(name as keyof Feedback, value);
            if (name === "rating") {
                error = "";
            }

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
                if (name !== "rating") {
                    const error = Validator.validate(
                        name,
                        feedback[name].value,
                    );

                    if (error) {
                        hasError = true;
                    }

                    setFeedback((state) => ({
                        ...state,
                        [name]: { ...state[name], error },
                    }));
                }
            });

            if (hasError) {
                return;
            } else {
                addFeedback(feedback as unknown as Feedback);
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
