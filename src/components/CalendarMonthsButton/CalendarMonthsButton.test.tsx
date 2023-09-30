import React from "react";
import { fireEvent, render } from "@testing-library/react";

import CalendarMonthsButton from "./CalendarMonthsButton";

describe("CalendarMonthsButton", () => {
  const dateStart = new Date("2022-01-01");
  const dateEnd = new Date("2023-01-01");
  const startDate = new Date("2022-02-01");
  const endDate = new Date("2022-12-31");
  const onChange = jest.fn();

  // it("should not call onChange when date is not within startRange", () => {
  //   const { getByRole } = render(
  //     <CalendarMonthsButton
  //       title="Jan"
  //       date={dateStart}
  //       selectedDate={endDate}
  //       startDate={startDate}
  //       endDate={endDate}
  //       startRange={null}
  //       endRange={null}
  //       onChange={onChange}
  //     />,
  //   );
  //   const button = getByRole("button");

  //   fireEvent.click(button);
  //   expect(onChange).not.toHaveBeenCalled();
  // });

  it("should not call onChange when date is not within endRange", () => {
    const { getByRole } = render(
      <CalendarMonthsButton
        title="Jan"
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
      <CalendarMonthsButton
        title="Jan"
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
      <CalendarMonthsButton
        title="Jan"
        date={endDate}
        selectedDate={endDate}
        startDate={startDate}
        endDate={endDate}
        startRange={startDate}
        endRange={endDate}
        onChange={onChange}
      />,
    );
    const endRangeButton = getByRole("button");

    expect(endRangeButton).toHaveStyleRule("background-color", "#2f80ed");
    expect(endRangeButton).toHaveStyleRule("color", "#fff");

    rerender(
      <CalendarMonthsButton
        title="Jan"
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
