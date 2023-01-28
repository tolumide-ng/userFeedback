import { FeedbackForm } from "../../../UI/organisms/FeedbackForm";
import { useHome } from "./useHome";

export const HomePage = () => {
    const { onChange, data, onSubmit, ratingOptions } = useHome();

    return (
        <FeedbackForm
            onChange={onChange}
            data={data}
            onSubmit={onSubmit}
            ratingOptions={ratingOptions}
        />
    );
};
