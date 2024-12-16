import { fireEvent, render, screen } from "@testing-library/react";
import TextField from "./TextField";

const TextFieldLabel = "Text producer";

describe("TextField Component", () => {
  test("render TextField", () => {
    render(<TextField dataTestId="textField" />);
    expect(screen.getByTestId("textField")).toBeInTheDocument();
  });

  test("does label render correctly", () => {
    render(<TextField label={TextFieldLabel} />);
    expect(screen.getByText(TextFieldLabel)).toBeInTheDocument();
  });

  test("does onChange is being invoked and updates state properly", () => {
    const handleChange = jest.fn();
    render(<TextField dataTestId="textField" onChange={handleChange} />);
    const input = screen.getByTestId("textField");
    fireEvent.change(input, { target: { value: "New value" } });
    expect(handleChange).toHaveBeenCalledWith("New value");
    expect(input).toHaveValue("New value");
  });

  test("validates input and displays error message", () => {
    const validate = (value: string) => value.length < 8;
    const errorMessage = "Input needs to have at least 8 letters or more";
    render(
      <TextField
        dataTestId="textField"
        validate={validate}
        errorMessage={errorMessage}
      />
    );
    const input = screen.getByTestId("textField");
    fireEvent.change(input, { target: { value: "admir" } });
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  test("render correct type attribute", () => {
    render(<TextField dataTestId="textField" type="password" />);
    const input = screen.getByTestId("textField");
    expect(input).toHaveAttribute("type", "password");
  });

  test("applies correct style rules via style prop", () => {
    const style = { border: "1px solid blue" };
    const { container } = render(<TextField style={style} />);
    const TextFieldParent = container.querySelector(".radar__textfield");

    expect(TextFieldParent).toHaveStyle("border: 1px solid blue");
  });
});
