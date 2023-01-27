export interface Feedback {
    author: string;
    email: string;
    rating: number;
    comment: string;
}

export type FeedbackWithId = Feedback & { id: string };

export type BasicAtomicClass = {
    wrapperClass?: string;
    subjectClass?: string;
    errorClass?: string;
};

export type Distribution = {
    name: string;
    percentage: number;
    value: number;
    total: number;
};
