import * as React from "react";
import { FeedbackWithErrors } from "../../../types";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { SelectOption } from "../../atoms/Select/Select";
import { TextArea } from "../../atoms/TextArea/TextArea";
import styles from "./FeedbackForm.module.css";

type FeedbackFormProps = {
    onChange: (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => void;
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
    return (
        <form onSubmit={onSubmit} className={styles.feedback}>
            <div className={styles.feedbackLeft}>
                <Input
                    name="author"
                    type="text"
                    value={data.author.value}
                    onChange={onChange}
                    error={data.author.error}
                    label="Author"
                    ariaLabel="author"
                />

                <Input
                    name="email"
                    type="email"
                    value={data.email.value}
                    onChange={onChange}
                    error={data.email.error}
                    label="Email"
                    ariaLabel="email"
                />

                <SelectOption
                    options={ratingOptions}
                    onChange={onChange}
                    name="rating"
                    label="Rating"
                    placeholder={"Choose a Rating"}
                    error={data.rating.error}
                    value={data.rating.value}
                />
            </div>
            <div className={styles.feedbackRight}>
                <TextArea
                    name="comment"
                    value={data.comment.value}
                    error={data.comment.error}
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
