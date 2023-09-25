import React from "react";
import { fireEvent, render } from "@testing-library/react";

import CalendarButton from "./CalendarButton";

describe("CalendarButton", () => {
  const onClick = jest.fn();

  it("renders the title", () => {
    const { getByText } = render(
      <CalendarButton title="Test Button" onClick={onClick} />,
    );
    const title = getByText("Test Button");

    expect(title).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const { getByText } = render(
      <CalendarButton title="Test Button" onClick={onClick} />,
    );
    const button = getByText("Test Button");

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it("styles the button as disabled when isDisabled is true", () => {
    const { getByText } = render(
      <CalendarButton
        title="Test Button"
        isDisabled={true}
        onClick={onClick}
      />,
    );
    const button = getByText("Test Button");

    expect(button).toHaveStyleRule("color", "#aaa");
  });

  it("applies the selected style when isSelected is true", () => {
    const { getByText } = render(
      <CalendarButton
        title="Test Button"
        isSelected={true}
        onClick={onClick}
      />,
    );
    const button = getByText("Test Button");

    expect(button).toHaveStyleRule("background-color", "#2f80ed");
  });

  it("removes radius and change color when rangeState is between", () => {
    const { getByText } = render(
      <CalendarButton
        title="Test Button"
        rangeState="between"
        onClick={onClick}
      />,
    );
    const button = getByText("Test Button");

    expect(button).toHaveStyleRule("border-radius", "0");
    expect(button).toHaveStyleRule("background-color", "rgba(47,128,237,0.1)");
    expect(button).toHaveStyleRule("color", "#2F80ED");
  });

  it("change background-color when rangeState is start", () => {
    const { getByText } = render(
      <CalendarButton
        title="Test Button"
        rangeState="start"
        onClick={onClick}
      />,
    );
    const button = getByText("Test Button");

    expect(button).toHaveStyleRule("background-color", "rgba(47,128,237,0.6)");
  });
});
