import styles from "./Input.module.css";

type InputProps = {
    name: string;
    required?: boolean;
    placeholder?: string;
    type: React.HTMLInputTypeAttribute;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    error?: string;
    label: string;
    ariaLabel?: string;
};

export const Input = ({
    name,
    placeholder,
    type,
    value,
    onChange,
    error,
    disabled = false,
    required = false,
    label,
    ariaLabel,
}: InputProps) => {
    return (
        <div className={styles.inputWrapper}>
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
                className={`${styles.input} ${
                    error ? styles.inputErrorInput : ""
                }`}
                disabled={disabled}
            />
            {error ? <p className={styles.inputError}>{error}</p> : null}
        </div>
    );
};
