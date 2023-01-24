import App from "../App.jsx";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

it("updates the value when the slider is clicked", () => {
  console.log("test");
  const user = userEvent.setup();
  //we will click add 1 then add 4
  const expected = 1;
  render(<App />);
  const clickSlider = screen.getByRole("toolcool-range-slider", {});
});
