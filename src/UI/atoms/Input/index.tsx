import { BasicAtomicClass } from "../../../types";
import styles from "./index.module.css";

interface InputProps {
    name: string;
    required?: boolean;
    placeholder?: string;
    type: React.HTMLInputTypeAttribute;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    error?: string;
    classes?: BasicAtomicClass;
    label: string;
    ariaLabel?: string;
}

export const Input = ({
    name,
    placeholder,
    type,
    value,
    onChange,
    classes,
    error,
    disabled = false,
    required = false,
    label,
    ariaLabel,
}: InputProps) => {
    return (
        <div className={`${styles.inputWrapper} ${classes?.wrapperClass}`}>
            <label className={styles.inputLabel} htmlFor={name}>
                {label}
            </label>

            <input
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                aria-label={ariaLabel}
                className={`${styles.input} ${classes?.subjectClass} ${
                    error ? styles.inputErrorInput : ""
                }`}
                disabled={disabled}
            />
            {error ? (
                <p className={`${styles.inputError} ${classes?.errorClass}`}>
                    {error}
                </p>
            ) : null}
        </div>
    );
};
