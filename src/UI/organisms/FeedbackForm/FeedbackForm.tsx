import * as React from "react";
import { ChangeElement, FeedbackWithErrors } from "../../../types";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { SelectOption } from "../../atoms/Select/Select";
import { TextArea } from "../../atoms/TextArea/TextArea";
import styles from "./FeedbackForm.module.css";

type FeedbackFormProps = {
    onChange: (e: React.ChangeEvent<ChangeElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
    data: FeedbackWithErrors;
    ratingOptions: Array<number>;
};

export const FeedbackForm = ({
    onChange,
    onSubmit,
    data,
    ratingOptions,
}: FeedbackFormProps) => {
    const { author, email, rating, comment } = data;
    return (
        <form onSubmit={onSubmit} className={styles.feedback}>
            <div className={styles.feedbackLeft}>
                <Input
                    name="author"
                    type="text"
                    value={author.value}
                    onChange={onChange}
                    error={author.error}
                    label="Author"
                />

                <Input
                    name="email"
                    type="email"
                    value={email.value}
                    onChange={onChange}
                    error={email.error}
                    label="Email"
                />

                <SelectOption
                    options={ratingOptions}
                    onChange={onChange}
                    name="rating"
                    label="Rating"
                    placeholder={"Choose a Rating"}
                    error={rating.error}
                    value={rating.value}
                />
            </div>
            <div className={styles.feedbackRight}>
                <TextArea
                    name="comment"
                    value={comment.value}
                    error={comment.error}
                    onChange={onChange}
                    label="Comment"
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
