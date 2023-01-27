import * as React from "react";
import styles from "./index.module.css";

interface SelectOptionProps {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Array<string | number>;
    name: string;
    label: string;
    error?: string;
    disabledOption: string | number | null;
    value: string | number;
}

export const SelectOption = ({
    onChange,
    options,
    name,
    label,
    error,
    disabledOption,
}: SelectOptionProps) => {
    return (
        <div className={styles.selectWrapper}>
            <label className={styles.selectLabel} htmlFor={name}>
                {label}
            </label>

            <select
                className={`${styles.select} ${
                    error ? styles.selectErrorSelect : ""
                }`}
                onChange={onChange}
                name={name}
            >
                {disabledOption !== null ? (
                    <option value={disabledOption}>{disabledOption}</option>
                ) : null}

                {options.map((value) => (
                    <option value={value} key={value}>
                        {value}
                    </option>
                ))}
            </select>

            {error ? <p className={styles.selectError}>{error}</p> : null}
        </div>
    );
};
