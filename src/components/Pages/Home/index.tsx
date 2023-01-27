import { FeedbackForm } from "../../../UI/organisms/FeedbackForm";
import { useHome } from "./useHome";

export const HomePage = () => {
    const { onChange, feedback, onSubmit, ratingOptions } = useHome();

    return (
        <article>
            <FeedbackForm
                onChange={onChange}
                feedback={feedback}
                onSubmit={onSubmit}
                ratingOptions={ratingOptions}
            />
        </article>
    );
};
