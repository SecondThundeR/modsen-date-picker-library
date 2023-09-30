import React from "react";
import { fireEvent, render } from "@testing-library/react";

import { zeroPad } from "@/utils/calendar";

import DatePicker from "./DatePicker";

describe("DatePicker", () => {
  const onChange = jest.fn();
  const onChangeStart = jest.fn();
  const onChangeEnd = jest.fn();
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

  it("should not call onChange if clicking already selected date", () => {
    const currDate = new Date();
    const { getAllByText, getByTestId } = render(
      <DatePicker onChange={onChange} />,
    );
    const calendarIcon = getByTestId("calendar-icon");

    fireEvent.click(calendarIcon);
    expect(getByTestId("calendar")).toBeInTheDocument();

    const button = getAllByText(String(currDate.getDate())).at(
      currDate.getDate() < 15 ? 0 : -1,
    );
    if (!button) throw new Error("Button not found");

    fireEvent.click(button);
    expect(onChange).not.toHaveBeenCalled();
  });

  it("should fallback to currentDate on clear button", () => {
    const currDate = new Date();
    const { getAllByText, getByTestId } = render(
      <DatePicker onChange={onChange} />,
    );
    const clearButton = getByTestId("clear");
    expect(getByTestId("clear")).toBeInTheDocument();
    fireEvent.click(clearButton);

    const calendarIcon = getByTestId("calendar-icon");
    fireEvent.click(calendarIcon);
    expect(getByTestId("calendar")).toBeInTheDocument();

    const button = getAllByText(String(currDate.getDate())).at(
      currDate.getDate() < 15 ? 0 : -1,
    );
    if (!button) throw new Error("Button not found");

    fireEvent.click(button);
    expect(button).toHaveStyleRule("background-color", "#2f80ed");
  });

  it("should not call onChange if new startRange is greater than endRange", () => {
    const startRange = new Date();
    startRange.setDate(startRange.getDate() - 1);
    const endRange = new Date();
    endRange.setDate(endRange.getDate() + 1);
    const exceedRangeDateNumber = new Date();
    exceedRangeDateNumber.setDate(exceedRangeDateNumber.getDate() + 2);
    const { getAllByText, getByTestId } = render(
      <DatePicker
        onChange={onChangeStart}
        startRange={startRange}
        isPickingStart
        endRange={endRange}
      />,
    );
    const calendarIcon = getByTestId("calendar-icon");

    fireEvent.click(calendarIcon);
    expect(getByTestId("calendar")).toBeInTheDocument();

    const button = getAllByText(String(exceedRangeDateNumber.getDate())).at(-1);
    if (!button) throw new Error("Button not found");

    fireEvent.click(button);
    expect(onChangeStart).not.toHaveBeenCalled();
  });

  it("should not call onChange if new endRange is less than startRange", () => {
    const startRange = new Date();
    startRange.setDate(startRange.getDate() - 1);
    const endRange = new Date();
    endRange.setDate(endRange.getDate() + 1);
    const exceedRangeDateNumber = new Date();
    exceedRangeDateNumber.setDate(exceedRangeDateNumber.getDate() - 2);
    const { getAllByText, getByTestId } = render(
      <DatePicker
        onChange={onChangeEnd}
        startRange={startRange}
        endRange={endRange}
        isPickingEnd
      />,
    );
    const calendarIcon = getByTestId("calendar-icon");

    fireEvent.click(calendarIcon);
    expect(getByTestId("calendar")).toBeInTheDocument();

    const button = getAllByText(String(exceedRangeDateNumber.getDate()))[0];
    fireEvent.click(button);
    expect(onChangeEnd).not.toHaveBeenCalled();
  });
});
