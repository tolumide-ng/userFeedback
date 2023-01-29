import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Feedback, FeedbackWithErrors } from "../../../../types";
import { UserFeedbackContext } from "../../../store/userFeedback";
import { Validator } from "../../../../utils/validator/validator";
import { adaptData } from "../../../../utils/adaptData/adaptData";

export const useHome = () => {
    const { addFeedback } = React.useContext(UserFeedbackContext);

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

    const [data, setData] = React.useState<FeedbackWithErrors>(initialState);

    const ratingOptions = React.useMemo(() => [1, 2, 3, 4, 5], []);

    const onChange = React.useCallback(
        (
            e: React.ChangeEvent<
                HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
            >,
        ) => {
            const { name, value } = e.target;
            const error =
                Validator.validate(name as keyof Feedback, value) ?? "";

            setData((state) => ({
                ...state,
                [name]: { value, error },
            }));
        },
        [],
    );

    const onSubmit = React.useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();

            const keys = Object.keys(data) as Array<keyof Feedback>;

            let hasError = false;

            keys.forEach((name) => {
                const error = Validator.validate(
                    name,
                    String(data[name].value),
                );

                if (error) hasError = true;

                setData((state) => ({
                    ...state,
                    [name]: { ...state[name], error },
                }));
            });

            if (hasError) {
                return;
            }

            addFeedback(adaptData(data));
            setData(initialState);
            navigate("/comments");
        },

        [addFeedback, data, navigate, initialState],
    );

    return {
        onChange,
        data,
        onSubmit,
        ratingOptions,
    };
};
