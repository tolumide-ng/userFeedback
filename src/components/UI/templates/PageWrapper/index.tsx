import { Outlet } from "react-router-dom";
import { Header } from "../../organisms/Header";
import styles from "./index.module.css";

export const PageWrapper = () => {
    return (
        <div className={styles.page}>
            <div className={styles.pageWrapper}>
                <header className={styles.pageHeader}>
                    <Header />
                </header>
                <main className={styles.pageContent}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
