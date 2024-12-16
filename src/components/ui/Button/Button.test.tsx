import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";
import { ArrowBack } from "../../icons";

const ButtonLabel = "Send";

describe("Button component", () => {
  test("render Button", () => {
    render(
      <Button onClick={() => console.log("Button clicked!")}>Send</Button>
    );
    expect(screen.getByText(ButtonLabel)).toBeInTheDocument();
  });

  test("invoke onClick function", () => {
    const handleClickMock = jest.fn();
    render(<Button onClick={handleClickMock}>Send</Button>);
    fireEvent.click(screen.getByText(ButtonLabel));
    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });

  test("does class is rendered correctly when primary props is provided", () => {
    const handleClickMock = jest.fn();
    render(
      <Button onClick={handleClickMock} variant="primary">
        Send
      </Button>
    );
    const buttonComponent = screen.getByText(ButtonLabel);
    expect(buttonComponent).toHaveClass("radar__button--primary");
  });

  test("does class is rendered correctly when fullWidth props is provided", () => {
    const handleClickMock = jest.fn();
    render(
      <Button onClick={handleClickMock} fullWidth>
        Send
      </Button>
    );
    const buttonComponent = screen.getByText(ButtonLabel);
    expect(buttonComponent).toHaveClass("radar__button--fullWidth");
  });

  test("is disabled when disabled prop is true", () => {
    const handleClickMock = jest.fn();
    render(
      <Button onClick={handleClickMock} disabled>
        Send
      </Button>
    );
    const button = screen.getByText(ButtonLabel);
    expect(button).toBeDisabled();
  });

  test("renders trailingIcon when provided", () => {
    const handleClickMock = jest.fn();
    render(
      <Button
        onClick={handleClickMock}
        trailingIcon={<ArrowBack dataTestid={"arrowBack"} />}
      >
        {ButtonLabel}
      </Button>
    );

    expect(screen.getByTestId("arrowBack")).toBeInTheDocument();
  });

  test("applies correct style rules via style prop", () => {
    const handleClickMock = jest.fn();
    const style = { border: "1px solid blue" };
    render(
      <Button onClick={handleClickMock} style={style}>
        {ButtonLabel}
      </Button>
    );
    const button = screen.getByText(ButtonLabel);
    expect(button).toHaveStyle("border: 1px solid blue");
  });
});
