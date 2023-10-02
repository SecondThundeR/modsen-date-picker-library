import React from "react";
import { fireEvent, render } from "@testing-library/react";

import FooterButton from "./FooterButton";

describe("FooterButton", () => {
  it("should render the button with the correct title", () => {
    const { getByText } = render(<FooterButton title="Click me!" />);
    const button = getByText("Click me!");

    expect(button).toBeInTheDocument();
  });

  it("should call the onClick function when the button is clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <FooterButton title="Click me!" onClick={onClick} />,
    );
    const button = getByText("Click me!");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
