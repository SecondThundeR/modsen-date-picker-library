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
  const onChange = jest.fn();

  it("renders the correct number of days", () => {
    const { getAllByRole } = render(
      <CalendarDaysGrid
        currentDate={currentDate}
        currentMonth={currentMonth}
        datesArray={datesArray}
        startRange={null}
        endRange={null}
        displayWeekends={false}
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
        startRange={null}
        endRange={null}
        displayWeekends={false}
        holidays={null}
        onChange={onChange}
      />,
    );
    const day = getByText("2");
    fireEvent.click(day);
    expect(onChange).toHaveBeenCalledWith(new Date("01/02/2022"));
  });
});
