interface InputProps {
    name: string;
    required: boolean;
    placeholder: string;
    type: React.HTMLInputTypeAttribute;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    error?: string;
    classes?: {
        wrapperClass?: string;
        inputClass?: string;
        errorClass?: string;
    };
}

export const Input = ({
    name,
    required,
    placeholder,
    type,
    value,
    onChange,
    disabled = false,
    classes,
    error,
}: InputProps) => {
    return (
        <div className={classes?.wrapperClass}>
            <input
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                className={classes?.inputClass}
                disabled={disabled}
            />
            {error ? <p className={classes?.errorClass}>{error}</p> : null}
        </div>
    );
};
