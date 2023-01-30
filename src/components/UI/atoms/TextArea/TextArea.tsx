import * as React from "react";
import styles from "./TextArea.module.css";

type TextAreaProps = {
    name: string;
    placeholder?: string;
    value: string;
    cols?: number;
    rows?: number;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string;
    disabled?: boolean;
};

export const TextArea = ({
    name,
    placeholder,
    value,
    cols = 30,
    rows = 10,
    onChange,
    error,
    disabled = false,
    label,
}: TextAreaProps) => {
    return (
        <div className={styles.textAreaWrapper}>
            <label className={styles.textAreaLabel} htmlFor={name}>
                {label}
            </label>

            <textarea
                name={name}
                cols={cols}
                rows={rows}
                onChange={onChange}
                className={`${styles.textArea} ${
                    error ? styles.textAreaError : ""
                }`}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                aria-label={name}
            />
            {error ? <p className={styles.textAreaError}>{error}</p> : null}
        </div>
    );
};
