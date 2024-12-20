import { useState } from "react";
import "./TextField.scss";
import { Warning } from "../../icons";

type TextFieldProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  validate?: (value: string) => boolean;
  errorMessage?: string;
  id?: string;
  variant?: "primary" | "secondary";
  style?: React.CSSProperties;
  type?: "number" | "text" | "password";
  dataTestId?: string;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  value: initialValue = "",
  onChange,
  validate,
  errorMessage,
  id,
  variant = "primary",
  style, // optional prop for inline style
  type = "text",
  dataTestId,
}) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setValue(newValue);

    if (onChange) onChange(newValue);
    if (validate) setError(validate(newValue));
  };

  return (
    <div style={style} className="radar__textfield">
      {label && <label className="radar__textfield__label">{label}</label>}

      <input
        id={id}
        data-testid={dataTestId}
        type={type}
        className={`radar__textfield__input ${
          error && "radar__textfield__input--error"
        }${variant && `radar__textfield__input--${variant}`}`}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />

      {error && (
        <span className="radar__textfield__error">
          <Warning /> {errorMessage}
        </span>
      )}
    </div>
  );
};

export default TextField;
