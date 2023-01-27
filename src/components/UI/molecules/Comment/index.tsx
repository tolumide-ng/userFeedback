import * as React from "react";
import styles from "./index.module.css";

interface CommentProps {
    author: string; // let's declare a type Email that already has the validate property which would be used to parse/validate email addresses
    comment: string;
}

export const Comment = ({ author, comment }: CommentProps) => {
    return (
        <article className={styles.comment}>
            <p className={styles.commentAuthor}>{author}</p>
            <p className={styles.commentContent}>{comment}</p>
        </article>
    );
};
