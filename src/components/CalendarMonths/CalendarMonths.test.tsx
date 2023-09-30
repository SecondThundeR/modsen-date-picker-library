import React from "react";
import { fireEvent, render } from "@testing-library/react";

import CalendarMonths from "./CalendarMonths";

describe("CalendarMonths", () => {
  const date = new Date("2022-01-01");
  const dateState = { year: 2022, month: 1, day: 1 };
  const startDate = new Date("2022-01-01");
  const endDate = new Date("2022-12-31");
  const startRange = null;
  const endRange = null;
  const onChange = jest.fn();

  it("should render 12 buttons", () => {
    const { getAllByRole } = render(
      <CalendarMonths
        date={date}
        dateState={dateState}
        startDate={startDate}
        endDate={endDate}
        startRange={startRange}
        endRange={endRange}
        onChange={onChange}
      />,
    );

    const buttons = getAllByRole("button");

    expect(buttons.length).toEqual(12);
  });

  it("should call onChange with correct arguments", () => {
    const { getByText } = render(
      <CalendarMonths
        date={date}
        dateState={dateState}
        startDate={startDate}
        endDate={endDate}
        startRange={startRange}
        endRange={endRange}
        onChange={onChange}
      />,
    );

    const button = getByText("Jan");

    fireEvent.click(button);

    expect(onChange).toHaveBeenCalledWith(new Date("2022-01-01"));
  });
});
