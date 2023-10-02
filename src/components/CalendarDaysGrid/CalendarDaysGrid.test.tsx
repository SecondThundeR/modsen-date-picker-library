import React from "react";
import { fireEvent, render } from "@testing-library/react";

import CalendarDaysGrid from "./CalendarDaysGrid";

describe("CalendarDaysGrid", () => {
  const currentDate = new Date("01/01/2022");
  const currentMonth = 0;
  const datesArray = [
    ["2022", "01", "01"],
    ["2022", "01", "02"],
    ["2022", "01", "03"],
  ];
  const startDate = new Date("01/01/2022");
  const endDate = new Date("12/31/2022");
  const startRange = null;
  const endRange = null;
  const onChange = jest.fn();

  it("renders the correct number of days", () => {
    const { getAllByRole } = render(
      <CalendarDaysGrid
        currentDate={currentDate}
        currentMonth={currentMonth}
        datesArray={datesArray}
        startDate={startDate}
        endDate={endDate}
        startRange={startRange}
        endRange={endRange}
        displayWeekends={false}
        isTodosEnabled={false}
        holidays={null}
        onChange={onChange}
      />,
    );
    const days = getAllByRole("button");

    expect(days).toHaveLength(3);
  });

  it("calls onChange when a day is clicked", () => {
    const { getByText } = render(
      <CalendarDaysGrid
        currentDate={currentDate}
        currentMonth={currentMonth}
        datesArray={datesArray}
        startDate={startDate}
        endDate={endDate}
        startRange={startRange}
        endRange={endRange}
        displayWeekends={false}
        isTodosEnabled={false}
        holidays={null}
        onChange={onChange}
      />,
    );
    const day = getByText("2");
    fireEvent.click(day);
    expect(onChange).toHaveBeenCalledWith(new Date("01/02/2022"));
  });
});
