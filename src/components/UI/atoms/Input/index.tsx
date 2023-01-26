interface InputProps {
    name: string;
    required: boolean;
    placeholder: string;
    type: React.HTMLInputTypeAttribute;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputClassName?: string;
    disabled?: boolean;
}

export const Input = ({
    name,
    required,
    placeholder,
    type,
    value,
    onChange,
    inputClassName,
    disabled = false,
}: InputProps) => {
    return (
        <input
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            className={inputClassName}
            disabled={disabled}
        />
    );
};
