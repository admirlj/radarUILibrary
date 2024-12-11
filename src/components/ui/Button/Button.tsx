import './Button.scss'

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
  trailingIcon?: React.ReactNode;
  fullWidth?: boolean;
  style?: React.CSSProperties;
};
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  trailingIcon,
  variant = "primary",
  fullWidth,
  style,
}) => {
  const buttonClass = `radar__button radar__button--${variant} ${fullWidth && `radar__button--fullWidth`}`;

  return (
    <button onClick={onClick} className={buttonClass} style={style}>
      {children}
      {trailingIcon ? (
        <span className={`radar__button__icon`}>{trailingIcon}</span>
      ) : null}
    </button>
  );
};

export default Button;
