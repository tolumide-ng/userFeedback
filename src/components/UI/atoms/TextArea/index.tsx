import React from "react";

interface TextAreaProps {
    name: string;
    placeholder: string;
    value: string;
    cols?: number;
    rows?: number;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string;
    disabled: boolean;
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
}: TextAreaProps) => {
    return (
        <div className={classes?.wrapperClass}>
            <textarea
                name={name}
                cols={cols}
                rows={rows}
                onChange={onChange}
                className={classes?.subjectClass}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
            />
            {error ? <p className={classes?.errorClass}>{error}</p> : null}
        </div>
    );
};
