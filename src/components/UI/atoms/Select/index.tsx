import * as React from "react";
import styles from "./index.module.css";

interface SelectOptionProps {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Array<string | number>;
    name: string;
    label: string;
}

export const SelectOption = ({
    onChange,
    options,
    name,
    label,
}: SelectOptionProps) => {
    return (
        <div className={styles.selectWrapper}>
            <label className={styles.selectLabel} htmlFor={name}>
                {label}
            </label>

            <select className={styles.select} onChange={onChange}>
                {options.map((value) => (
                    <option value={value} key={value}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    );
};
