import { FeedbackForm } from "../../../UI/organisms/FeedbackForm";
import { useHome } from "./useHome";

export const HomePage = () => {
    const { onChange, data, onSubmit, ratingOptions } = useHome();

    return (
        <article>
            <FeedbackForm
                onChange={onChange}
                data={data}
                onSubmit={onSubmit}
                ratingOptions={ratingOptions}
            />
        </article>
    );
};
