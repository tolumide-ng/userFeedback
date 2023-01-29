import { Feedback, FeedbackWithRating } from "../../types";

export function adaptData(feedback: FeedbackWithRating): Feedback {
    const feedbackArr = Object.entries(feedback).map(([key, obj]) => [
        key,
        obj.value,
    ]);

    return Object.fromEntries(feedbackArr);
}
