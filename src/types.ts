export type Feedback = {
    author: string;
    email: string;
    rating: number;
    comment: string;
};

export type FeedbackWithId = Feedback & { id: string };

export type Distribution = {
    rating: string;
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

type FeedbackWithErrorsExceptRating = Record<
    Exclude<keyof Feedback, "rating">,
    UserInput
>;

type RatingWithError = Record<"rating", UserRating>;

export type FeedbackWithErrors = FeedbackWithErrorsExceptRating &
    RatingWithError;
