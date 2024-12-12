import "./Button.scss";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
  id?: string;
  trailingIcon?: React.ReactNode;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
};
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  id,
  trailingIcon,
  variant = "primary",
  fullWidth,
  style, // optional props for inline style
  disabled = false,
}) => {
  const buttonClass = `radar__button radar__button--${variant} ${
    fullWidth && "radar__button--fullWidth"
  } ${disabled && "radar__button--disabled"}`;

  return (
    <button
      id={id}
      disabled={disabled}
      onClick={onClick}
      className={buttonClass}
      style={style}
    >
      {children}
      {trailingIcon ? (
        <span className={`radar__button__icon`}>{trailingIcon}</span>
      ) : null}
    </button>
  );
};

export default Button;
