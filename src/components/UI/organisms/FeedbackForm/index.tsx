import * as React from "react";
import { FeedbackInputWithRating } from "../../../Pages/Home/useHome";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { SelectOption } from "../../atoms/Select";
import { TextArea } from "../../atoms/TextArea";
import styles from "./index.module.css";

interface FeedbackFormProps {
    onChange: (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => void;
    onSubmit: (e: React.FormEvent) => void;
    feedback: FeedbackInputWithRating;
    ratingOptions: Array<number>;
}

export const FeedbackForm = ({
    onChange,
    onSubmit,
    feedback,
    ratingOptions,
}: FeedbackFormProps) => {
    return (
        <form onSubmit={onSubmit} className={styles.feedback}>
            <div className={styles.feedbackLeft}>
                <Input
                    name="author"
                    type="text"
                    value={feedback.author.value}
                    onChange={onChange}
                    error={feedback.author.error}
                    label="Author"
                    ariaLabel="author"
                />

                <Input
                    name="email"
                    type="email"
                    value={feedback.email.value}
                    onChange={onChange}
                    error={feedback.email.error}
                    label="Email"
                    ariaLabel="email"
                />

                <SelectOption
                    options={ratingOptions}
                    onChange={onChange}
                    name="rating"
                    label="Rating"
                />
            </div>
            <div className={styles.feedbackRight}>
                <TextArea
                    name="comment"
                    value={feedback.comment.value}
                    error={feedback.comment.error}
                    onChange={onChange}
                    label="Comment"
                    ariaLabel="comment"
                />

                <div className={styles.feedbackAction}>
                    <Button
                        className={styles.feedbackSubmit}
                        text="Submit"
                        type="submit"
                    />
                </div>
            </div>
        </form>
    );
};
