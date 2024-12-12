import { useState } from "react";
import "./App.scss";
import Button from "./components/ui/Button/Button";
import TextField from "./components/ui/TextField/TextField";
import ArrowBack from "./components/icons/ArrowBack/ArrowBack";

function App() {
  const [inputValue, setInputValue] = useState<undefined | string>();
  const [textToShow, setTextToShow] = useState<string>();
  const [error, setError] = useState(false);

  const handleOnChange = (value: string) => {
    const inputValue = value;
    setInputValue(inputValue);
  };

  const handleOnClick = () => {
    setTextToShow(inputValue);
  };

  const validation = (value: string) => {
    // Check if the value contains any numbers
    const numberPattern = /\d/;
    setError(numberPattern.test(value));
    return numberPattern.test(value);
  };

  return (
    <>
      <div className="flex-center">
        <TextField
          onChange={handleOnChange}
          validate={validation}
          label="Text producer"
          errorMessage="No numbers allowed!"
          variant="primary"
        />
        <Button
          trailingIcon={<ArrowBack />}
          style={{ marginLeft: "16px" }}
          onClick={handleOnClick}
          disabled={error}
          variant="primary"
        >
          Submit
        </Button>
      </div>
      {textToShow && (
        <div className="output">
          <p className="output__paragraph">{textToShow}</p>
        </div>
      )}
    </>
  );
}

export default App;
