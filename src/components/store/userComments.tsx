import * as React from "react";
import { Comment, Rating } from "../../types";

export const UserCommentsContext = React.createContext({});

export const UserCommentsProvider = ({ children }: React.PropsWithChildren) => {
    const [comments, setComments] = React.useState<Array<Comment>>([]);

    const addComment = React.useCallback((comment: Comment) => {
        setComments((state) => ({ ...state, comment }));
    }, []);

    const getRatingsDistribution = React.useCallback(() => {
        const result = {
            [Rating.One]: 0,
            [Rating.Two]: 0,
            [Rating.Three]: 0,
            [Rating.Four]: 0,
            [Rating.Five]: 0,
        };

        comments.forEach(({ rating }) => {
            result[rating] = result[rating] + 1;
        });

        return result;
    }, [comments]);

    const valueProps = React.useMemo(
        () => ({ comments, addComment, getRatingsDistribution }),
        [comments, addComment, getRatingsDistribution],
    );

    return (
        <UserCommentsContext.Provider value={valueProps}>
            {children}
        </UserCommentsContext.Provider>
    );
};
