import "./App.scss";
import SendIcon from "./components/icons/Send/Send";
import Button from "./components/ui/Button/Button";
import TextField from "./components/ui/TextField/TextField";

function App() {
  return (
    <div className="flex-center">
      <TextField />
      <Button
        trailingIcon={<SendIcon width="16" height="16" />}
        style={{ marginLeft: "16px" }}
        onClick={() => console.log("test")}
      >
        Submit
      </Button>
    </div>
  );
}

export default App;
