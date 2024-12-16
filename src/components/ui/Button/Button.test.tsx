import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders Button with children", () => {
  render(<Button onClick={() => console.log("Clicked!")}>Click Me</Button>);
  expect(screen.getByText("Click Me")).toBeInTheDocument();
});
