import { useState } from "react";
import "./TextField.scss";

type TextFieldProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  validate?: (value: string) => boolean;
  errorMessage?: string;
  variant?: "primary" | "secondary";
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  value: initialValue = "",
  onChange,
  validate,
  errorMessage,
  variant = "primary",
}) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setValue(newValue);

    if (onChange) onChange(newValue);
    if (validate) setError(!validate(newValue));
  };

  return (
    <div className="radar__textfield">
      {label && <label className="radar__textfield__label">{label}</label>}

      <input
        type="text"
        className={`radar__textfield__input ${
          error ? "radar__textfield__input--error" : ""
        }
          ${variant && `radar__textfield__input--${variant}`}
        `}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />

      {error && <span className="radar__textfield__error">{errorMessage}</span>}
    </div>
  );
};

export default TextField;
