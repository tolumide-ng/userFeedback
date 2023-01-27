import { FeedbackWithId } from "../types";

const STORAGE_KEY = "reviews";

export const storage = {
    get: () => {
        const reviews = localStorage.getItem(STORAGE_KEY);
        if (reviews) return JSON.parse(reviews);
        return [];
    },
    update: (allFeedback: Array<FeedbackWithId>) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(allFeedback));
    },
};
