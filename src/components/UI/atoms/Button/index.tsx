export type ButtonType = "submit" | "button" | "reset";

interface ButtonProps {
    type: ButtonType;
    text: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    disabled?: boolean;
}

export const Button = ({
    text,
    type,
    onClick,
    className,
    disabled = false,
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={className}
            disabled={disabled}
        >
            {text}
        </button>
    );
};
