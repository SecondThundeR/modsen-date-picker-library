import React from "react";
import { fireEvent, render } from "@testing-library/react";

import * as hocs from "@/hocs";

import DatePicker from "./DatePicker";

jest.mock("@/hocs", () => {
  return {
    __esModule: true,
    ...jest.requireActual("@/hocs"),
  } as unknown;
});

describe("DatePicker", () => {
  const onChange = jest.fn();
  const startDate = new Date("01/01/2021");
  const endDate = new Date("12/31/2023");

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

  it("calls withHolidays HOC on render", () => {
    const withHolidaysSpy = jest.spyOn(hocs, "withHolidays");
    render(
      <DatePicker
        startDate={startDate}
        endDate={endDate}
        holidays={{
          1: [1, 2, 3],
        }}
      />,
    );
    expect(withHolidaysSpy).toBeCalled();
  });

  it("calls withHolidaysAPI HOC on render", () => {
    const withHolidaysAPISpy = jest.spyOn(hocs, "withHolidaysAPI");
    render(
      <DatePicker
        startDate={startDate}
        endDate={endDate}
        holidayCountry="BY"
        holidayYear={2022}
      />,
    );
    expect(withHolidaysAPISpy).toBeCalled();
  });
});
