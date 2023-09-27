import React from "react";
import { render, screen } from "@testing-library/react";

import CalendarDay from "./CalendarDay";

describe("CalendarDay", () => {
  const date = new Date(2022, 0, 1);
  const tomorrowDate = new Date(2022, 0, 2);

  test("isWeekend is true for weekend dates when displayWeekends is true", () => {
    const { rerender } = render(
      <CalendarDay
        date={date}
        selectedDate={tomorrowDate}
        selectedMonth={1}
        displayWeekends={false}
        holidays={null}
        onChange={() => {}}
      />,
    );
    expect(screen.getByRole("button")).not.toHaveStyleRule("color", "#f6546a");

    rerender(
      <CalendarDay
        date={date}
        selectedDate={tomorrowDate}
        selectedMonth={1}
        displayWeekends={true}
        holidays={null}
        onChange={() => {}}
      />,
    );
    expect(screen.getByRole("button")).toHaveStyleRule("color", "#f6546a");
  });
});
