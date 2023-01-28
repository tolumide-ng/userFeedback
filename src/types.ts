export type Feedback = {
    author: string;
    email: string;
    rating: number;
    comment: string;
};

export type FeedbackWithId = Feedback & { id: string };

export type BasicAtomicClass = {
    wrapperClass?: string;
    subjectClass?: string;
    errorClass?: string;
};

export type Distribution = {
    name: string;
    percentage: number;
};

type UserInput = {
    value: string;
    error: string;
};

type UserRating = {
    value: number;
    error: string;
};

type FeedbackExceptRating = Record<
    Exclude<keyof Feedback, "rating">,
    UserInput
>;

type FeedbackRating = Record<"rating", UserRating>;

export type FeedbackWithRating = FeedbackExceptRating & FeedbackRating;
