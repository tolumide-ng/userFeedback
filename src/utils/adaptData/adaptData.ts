import { Feedback, FeedbackWithErrors } from "../../types";

export function adaptData(feedback: FeedbackWithErrors): Feedback {
    const feedbackWithErrorArrEntries = Object.entries(feedback).map(
        ([key, obj]) => [key, obj.value],
    );

    return Object.fromEntries(feedbackWithErrorArrEntries);
}
