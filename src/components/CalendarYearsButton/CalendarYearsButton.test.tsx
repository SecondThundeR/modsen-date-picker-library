import React from "react";
import { fireEvent, render } from "@testing-library/react";

import CalendarYearsButton from "./CalendarYearsButton";

describe("CalendarYearsButton", () => {
  const dateStart = new Date("01/01/2021");
  const dateEnd = new Date("01/01/2023");
  const startDate = new Date("01/02/2022");
  const endDate = new Date("01/12/2022");
  const onChange = jest.fn();

  it("should not call onChange when date is not within startRange", () => {
    const { getByRole } = render(
      <CalendarYearsButton
        title="2022"
        date={dateStart}
        selectedDate={endDate}
        startDate={startDate}
        endDate={endDate}
        startRange={null}
        endRange={null}
        onChange={onChange}
      />,
    );
    const button = getByRole("button");

    fireEvent.click(button);
    expect(onChange).not.toHaveBeenCalled();
  });

  it("should not call onChange when date is not within endRange", () => {
    const { getByRole } = render(
      <CalendarYearsButton
        title="2022"
        date={dateEnd}
        selectedDate={startDate}
        startDate={startDate}
        endDate={endDate}
        startRange={null}
        endRange={null}
        onChange={onChange}
      />,
    );
    const button = getByRole("button");

    fireEvent.click(button);
    expect(onChange).not.toHaveBeenCalled();
  });

  it("rangeState works correctly", () => {
    const { rerender, getByRole } = render(
      <CalendarYearsButton
        title="2022"
        date={startDate}
        selectedDate={startDate}
        startDate={startDate}
        endDate={endDate}
        startRange={startDate}
        endRange={endDate}
        onChange={onChange}
      />,
    );
    expect(getByRole("button")).toHaveStyleRule(
      "background-color",
      "rgba(47,128,237,0.6)",
    );

    rerender(
      <CalendarYearsButton
        title="2023"
        date={dateEnd}
        selectedDate={dateEnd}
        startDate={startDate}
        endDate={dateEnd}
        startRange={startDate}
        endRange={dateEnd}
        onChange={() => {}}
      />,
    );
    const endRangeButton = getByRole("button");

    expect(endRangeButton).toHaveStyleRule("background-color", "#2f80ed");
    expect(endRangeButton).toHaveStyleRule("color", "#fff");

    rerender(
      <CalendarYearsButton
        title="2022"
        date={startDate}
        selectedDate={dateEnd}
        startDate={dateStart}
        endDate={dateEnd}
        startRange={dateStart}
        endRange={dateEnd}
        onChange={onChange}
      />,
    );

    const betweenRangeButton = getByRole("button");
    expect(betweenRangeButton).toHaveStyleRule("border-radius", "0");
    expect(betweenRangeButton).toHaveStyleRule(
      "background-color",
      "rgba(47,128,237,0.1)",
    );
    expect(betweenRangeButton).toHaveStyleRule("color", "#2f80ed");
  });
});
