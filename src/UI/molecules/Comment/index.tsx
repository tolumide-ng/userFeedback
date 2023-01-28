import styles from "./index.module.css";

type CommentProps = {
    email: string;
    comment: string;
};

export const Comment = ({ email, comment }: CommentProps) => {
    return (
        <article className={styles.comment}>
            <p className={styles.commentAuthor}>{email}</p>
            <p className={styles.commentContent}>{comment}</p>
        </article>
    );
};
