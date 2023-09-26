import React from "react";
import { fireEvent, render } from "@testing-library/react";

import { zeroPad } from "@/utils/calendar";

import DatePicker from "./DatePicker";

describe("DatePicker", () => {
  const startDate = new Date("2021-01-01");
  const endDate = new Date("2023-12-31");

  it("opens and closes the calendar when the calendar icon is clicked", () => {
    const { getByTestId, queryByTestId } = render(
      <DatePicker startDate={startDate} endDate={endDate} />,
    );
    const calendarIcon = getByTestId("calendar-icon");

    fireEvent.click(calendarIcon);
    expect(getByTestId("calendar")).toBeInTheDocument();

    fireEvent.click(calendarIcon);
    expect(queryByTestId("calendar")).toBeNull();
  });

  it("changes the date when a day is clicked in the calendar", () => {
    const { getByTestId, queryAllByText } = render(
      <DatePicker startDate={startDate} endDate={endDate} />,
    );
    const calendarIcon = getByTestId("calendar-icon");
    fireEvent.click(calendarIcon);

    const calendar = getByTestId("calendar");
    expect(calendar).toBeInTheDocument();

    const currentDate = new Date();
    const nextDate = new Date();
    nextDate.setDate(currentDate.getDate() + 1);

    const days = queryAllByText(String(nextDate.getDate()));
    const day = days[0];
    fireEvent.click(day);

    const input = getByTestId("input");
    const formattedDate = `${zeroPad(nextDate.getDate(), 2)}/${zeroPad(
      nextDate.getMonth(),
      2,
    )}/${nextDate.getFullYear()}`;
    expect(input).toHaveValue(formattedDate);
  });

  it("clears the date when the clear button is clicked", () => {
    const { getByTestId } = render(
      <DatePicker startDate={startDate} endDate={endDate} />,
    );
    const input = getByTestId("input");
    const clearButton = getByTestId("clear");

    fireEvent.change(input, { target: { value: "1/1/2022" } });
    fireEvent.click(clearButton);

    expect(input).toHaveValue("");
  });
});
