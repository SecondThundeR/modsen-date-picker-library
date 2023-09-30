import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import CalendarDay from "./CalendarDay";

describe("CalendarDay", () => {
  const date = new Date(2022, 0, 1);
  const previousDate = new Date(2022, 0, 1);
  previousDate.setDate(previousDate.getDate() - 1);
  const tomorrowDate = new Date(2022, 0, 1);
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);

  it("isWeekend is true for weekend dates when displayWeekends is true", () => {
    const { rerender } = render(
      <CalendarDay
        date={date}
        startRange={null}
        endRange={null}
        selectedDate={tomorrowDate}
        selectedMonth={1}
        displayWeekends={false}
        isTodosEnabled={false}
        holidays={null}
        onChange={() => {}}
      />,
    );
    expect(screen.getByRole("button")).not.toHaveStyleRule("color", "#f6546a");

    rerender(
      <CalendarDay
        date={date}
        startRange={null}
        endRange={null}
        selectedDate={tomorrowDate}
        selectedMonth={1}
        displayWeekends={true}
        isTodosEnabled={false}
        holidays={null}
        onChange={() => {}}
      />,
    );
    expect(screen.getByRole("button")).toHaveStyleRule("color", "#f6546a");
  });

  it("rangeState works correctly", () => {
    const { rerender } = render(
      <CalendarDay
        date={date}
        startRange={date}
        endRange={null}
        selectedDate={date}
        selectedMonth={1}
        displayWeekends={false}
        isTodosEnabled={false}
        holidays={null}
        onChange={() => {}}
      />,
    );
    expect(screen.getByRole("button")).toHaveStyleRule(
      "background-color",
      "rgba(47,128,237,0.6)",
    );

    rerender(
      <CalendarDay
        date={date}
        startRange={null}
        endRange={date}
        selectedDate={date}
        selectedMonth={1}
        displayWeekends={true}
        isTodosEnabled={false}
        holidays={null}
        onChange={() => {}}
      />,
    );
    const endRangeButton = screen.getByRole("button");

    expect(endRangeButton).toHaveStyleRule("background-color", "#2f80ed");
    expect(endRangeButton).toHaveStyleRule("color", "#fff");

    rerender(
      <CalendarDay
        date={date}
        startRange={previousDate}
        endRange={tomorrowDate}
        selectedDate={tomorrowDate}
        selectedMonth={1}
        displayWeekends={true}
        isTodosEnabled={false}
        holidays={null}
        onChange={() => {}}
      />,
    );

    const betweenRangeButton = screen.getByRole("button");
    expect(betweenRangeButton).toHaveStyleRule("border-radius", "0");
    expect(betweenRangeButton).toHaveStyleRule(
      "background-color",
      "rgba(47,128,237,0.1)",
    );
    expect(betweenRangeButton).toHaveStyleRule("color", "#2f80ed");
  });

  it("double click opens modal", () => {
    const { getByRole, getByTestId } = render(
      <CalendarDay
        date={date}
        startRange={null}
        endRange={null}
        selectedDate={tomorrowDate}
        selectedMonth={1}
        displayWeekends={false}
        isTodosEnabled={true}
        holidays={null}
        onChange={() => {}}
      />,
    );
    const button = getByRole("button");
    fireEvent.doubleClick(button);

    const modal = getByTestId("todo-modal");
    expect(modal).toBeInTheDocument();

    fireEvent.click(getByTestId("backdrop"));
    expect(modal).not.toBeInTheDocument();
  });
});
