import { useState } from "react";
import "./App.scss";
import SendIcon from "./components/icons/Send/Send";
import Button from "./components/ui/Button/Button";
import TextField from "./components/ui/TextField/TextField";

function App() {
  const [firstName, setFirstName] = useState<undefined | string>();
  const [textToShow, setTextToShow] = useState<string>();
  const [error, setError] = useState(false);

  const handleOnChange = (value: string) => {
    const inputValue = value;
    if (inputValue) setFirstName(inputValue);
  };

  const handleOnClick = () => {
    if (firstName) setTextToShow(firstName);
  };

  const validation = (value: string) => {
    // Check if the value contains any numbers using a regular expression
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
        />
        <Button
          trailingIcon={<SendIcon width={16} height={16} />}
          style={{ marginLeft: "16px" }}
          onClick={handleOnClick}
          disabled={error}
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
