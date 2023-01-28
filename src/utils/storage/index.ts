import { FeedbackWithId } from "../../types";

const STORAGE_KEY = "allFeedback";

export class Storage {
    static get reviews(): Array<FeedbackWithId> {
        const allFeedback = localStorage.getItem(STORAGE_KEY);
        if (allFeedback) return JSON.parse(allFeedback);
        return [];
    }

    static set reviews(allFeedback: Array<FeedbackWithId>) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(allFeedback));
    }
}
