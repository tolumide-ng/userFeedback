import { Distribution, FeedbackWithId } from "../../../types";
import { Chart } from "../../molecules/Chart/Chart";
import { Comment } from "../../molecules/Comment/Comment";
import styles from "./FeedbackResults.module.css";

type FeedbackResultsProps = {
    allFeedback: Array<FeedbackWithId>;
    ratingDistribution: Array<Distribution>;
};

export const FeedbackResults = ({
    allFeedback,
    ratingDistribution,
}: FeedbackResultsProps) => {
    return (
        <article className={styles.result}>
            <Chart data={ratingDistribution} />
            <h2 className={styles.resultTitle}>Latest Comments</h2>

            <div className={styles.resultContent}>
                {allFeedback.map(({ email, comment, id }) => (
                    <Comment key={id} email={email} comment={comment} />
                ))}

                {!allFeedback?.length ? (
                    <p>There are no comments at the moment</p>
                ) : null}
            </div>
        </article>
    );
};
