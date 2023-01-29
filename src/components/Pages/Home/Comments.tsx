import { FeedbackForm } from "../../../UI/organisms/FeedbackForm/FeedbackForm";
import { useHome } from "./useHome/useHome";

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
