import * as React from "react";
import styles from "./index.module.css";

interface TextAreaProps {
    name: string;
    placeholder?: string;
    value: string;
    cols?: number;
    rows?: number;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string;
    disabled?: boolean;
    ariaLabel?: string;
    classes?: {
        wrapperClass?: string;
        subjectClass?: string;
        errorClass?: string;
    };
}

export const TextArea = ({
    name,
    placeholder,
    value,
    cols = 30,
    rows = 10,
    onChange,
    error,
    disabled = false,
    classes,
    label,
    ariaLabel,
}: TextAreaProps) => {
    return (
        <div className={`${styles.textAreaWrapper} ${classes?.wrapperClass}`}>
            <label className={styles.textAreaLabel} htmlFor={name}>
                {label}
            </label>

            <textarea
                name={name}
                cols={cols}
                rows={rows}
                onChange={onChange}
                className={`${styles.textArea} ${classes?.subjectClass} ${
                    error ? styles.textAreaError : ""
                }`}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                aria-label={ariaLabel}
            />
            {error ? (
                <p className={`${styles.textAreaError} ${classes?.errorClass}`}>
                    {error}
                </p>
            ) : null}
        </div>
    );
};
