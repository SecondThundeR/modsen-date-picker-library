import React from "react";
import { fireEvent, render } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  it("should call onDateChange with the parsed date when a valid date is entered", () => {
    const onDateChange = jest.fn();
    const { getByTestId } = render(
      <Input
        title="Date"
        onDateChange={onDateChange}
        dateString="22/09/2021"
        onCalendarClick={jest.fn()}
        onClearClick={jest.fn()}
      />,
    );
    const input = getByTestId("input");

    fireEvent.change(input, { target: { value: "22/09/2023" } });

    expect(onDateChange).toHaveBeenCalledWith(new Date(2023, 8, 22));
  });

  it("should call onClearClick when input is not empty", () => {
    const onClearClick = jest.fn();
    const { getByTestId } = render(
      <Input
        title="Date"
        onDateChange={jest.fn()}
        dateString="22/09/2021"
        onCalendarClick={jest.fn()}
        onClearClick={onClearClick}
      />,
    );
    const input = getByTestId("input");

    fireEvent.change(input, { target: { value: "22/09/2023" } });

    const clearButton = getByTestId("clear");
    fireEvent(clearButton, new MouseEvent("click", { bubbles: true }));

    expect(onClearClick).toBeCalled();
  });

  it("should not call onDateChange when an invalid date is entered or non-digits are entered", () => {
    const onDateChange = jest.fn();
    const { getByTestId } = render(
      <Input
        title="Date"
        onDateChange={onDateChange}
        dateString="22/09/2021"
        onCalendarClick={jest.fn()}
        onClearClick={jest.fn()}
      />,
    );
    const input = getByTestId("input");

    fireEvent.change(input, { target: { value: "22/09/20" } });

    expect(onDateChange).not.toHaveBeenCalled();

    fireEvent.change(input, { target: { value: "abc" } });

    expect(onDateChange).not.toHaveBeenCalled();
  });

  it("should display an error message when the entered date is outside the allowed range", () => {
    const { getByText, getByTestId } = render(
      <Input
        title="Date"
        dateString="22/09/2021"
        startDate={new Date(2023, 0, 1)}
        endDate={new Date(2023, 11, 31)}
        onDateChange={jest.fn()}
        onCalendarClick={jest.fn()}
        onClearClick={jest.fn()}
      />,
    );
    const input = getByTestId("input");

    fireEvent.change(input, { target: { value: "22/09/2024" } });

    expect(getByText("Invalid date!")).toBeInTheDocument();
  });

  it("should display default title when not passed", () => {
    const { getByText } = render(
      <Input
        dateString="22/09/2021"
        startDate={new Date(2023, 0, 1)}
        endDate={new Date(2023, 11, 31)}
        onDateChange={jest.fn()}
        onCalendarClick={jest.fn()}
        onClearClick={jest.fn()}
      />,
    );
    expect(getByText("Date")).toBeInTheDocument();
  });

  it("should change maxLength attribute when changing type", () => {
    const { rerender, getByTestId } = render(
      <Input
        type="regular"
        dateString="22/09/2021"
        onDateChange={jest.fn()}
        onCalendarClick={jest.fn()}
        onClearClick={jest.fn()}
      />,
    );
    expect(getByTestId("input")).toHaveAttribute("maxlength", "10");

    rerender(
      <Input
        type="month"
        dateString="22/09/2021"
        onDateChange={jest.fn()}
        onCalendarClick={jest.fn()}
        onClearClick={jest.fn()}
      />,
    );
    expect(getByTestId("input")).toHaveAttribute("maxlength", "7");

    rerender(
      <Input
        type="year"
        dateString="22/09/2021"
        onDateChange={jest.fn()}
        onCalendarClick={jest.fn()}
        onClearClick={jest.fn()}
      />,
    );
    expect(getByTestId("input")).toHaveAttribute("maxlength", "4");
  });
});
