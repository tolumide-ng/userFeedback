import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";
import styles from "./Header.module.css";

export const Header = () => {
    const location = useLocation();
    const [page, setPage] = React.useState("");

    const pageTitles: Record<string, string> = React.useMemo(
        () => ({
            home: "Feedback Form",
            comments: "Feedback Results",
        }),
        [],
    );

    React.useEffect(() => {
        const name: string = location.pathname.split("/")[1];
        if (!name) {
            setPage("home");
        } else {
            setPage(name);
        }
    }, [location]);

    return (
        <div className={styles.header}>
            <h1 className={styles.headerTitle}>{pageTitles[page]}</h1>

            {page === "comments" ? (
                <Link to="/">
                    <Button
                        type="button"
                        text="Go back"
                        className={styles.headerButton}
                    />
                </Link>
            ) : null}
        </div>
    );
};
