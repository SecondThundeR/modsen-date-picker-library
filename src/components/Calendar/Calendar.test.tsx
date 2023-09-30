import React from "react";
import { fireEvent, render } from "@testing-library/react";

import * as utils from "@/utils/calendar";

import Calendar from "./Calendar";

describe("Calendar", () => {
  const date = new Date("2022-01-01");
  const startDate = new Date("2021-01-01");
  const endDate = new Date("2023-12-31");
  const onChange = jest.fn();

  it("renders the correct header title", () => {
    const { getByText } = render(
      <Calendar
        date={date}
        startDate={startDate}
        endDate={endDate}
        startRange={null}
        endRange={null}
        isSundayFirst={false}
        displayWeekends={false}
        isTodosEnabled={false}
        holidays={null}
        onChange={onChange}
      />,
    );
    const title = getByText("January 2022");

    expect(title).toBeInTheDocument();
  });

  it("renders the months and years grid", () => {
    const { getByTestId, rerender } = render(
      <Calendar
        type="month"
        date={date}
        startDate={startDate}
        endDate={endDate}
        startRange={null}
        endRange={null}
        isSundayFirst={false}
        displayWeekends={false}
        isTodosEnabled={false}
        holidays={null}
        onChange={onChange}
      />,
    );
    const monthsGrid = getByTestId("months-grid");

    expect(monthsGrid).toBeInTheDocument();

    rerender(
      <Calendar
        type="year"
        date={date}
        startDate={startDate}
        endDate={endDate}
        startRange={null}
        endRange={null}
        isSundayFirst={false}
        displayWeekends={false}
        isTodosEnabled={false}
        holidays={null}
        onChange={onChange}
      />,
    );
    const years = getByTestId("years-grid");

    expect(years).toBeInTheDocument();
  });

  it("should call correct utils function when calling onPrevClick with other types", () => {
    const spyPrevYear = jest.spyOn(utils, "getPreviousYear");
    const spyPrevDecade = jest.spyOn(utils, "getPreviousDecade");
    const { getByTestId, rerender } = render(
      <Calendar
        type="month"
        date={date}
        startDate={startDate}
        endDate={endDate}
        startRange={null}
        endRange={null}
        isSundayFirst={false}
        displayWeekends={false}
        isTodosEnabled={false}
        holidays={null}
        onChange={onChange}
      />,
    );
    const monthsGrid = getByTestId("months-grid");
    expect(monthsGrid).toBeInTheDocument();

    fireEvent.click(getByTestId("prev-button"));
    expect(spyPrevYear).toHaveBeenCalled();

    rerender(
      <Calendar
        type="year"
        date={date}
        startDate={startDate}
        endDate={endDate}
        startRange={null}
        endRange={null}
        isSundayFirst={false}
        displayWeekends={false}
        isTodosEnabled={false}
        holidays={null}
        onChange={onChange}
      />,
    );
    const years = getByTestId("years-grid");

    expect(years).toBeInTheDocument();

    fireEvent.click(getByTestId("prev-button"));
    expect(spyPrevDecade).toHaveBeenCalled();
  });

  it("should call correct utils function when calling onNextClick with other types", () => {
    const spyNextYear = jest.spyOn(utils, "getNextYear");
    const spyNextDecade = jest.spyOn(utils, "getNextDecade");
    const { getByTestId, rerender } = render(
      <Calendar
        type="month"
        date={date}
        startDate={startDate}
        endDate={endDate}
        startRange={null}
        endRange={null}
        isSundayFirst={false}
        displayWeekends={false}
        isTodosEnabled={false}
        holidays={null}
        onChange={onChange}
      />,
    );
    const monthsGrid = getByTestId("months-grid");
    expect(monthsGrid).toBeInTheDocument();

    fireEvent.click(getByTestId("next-button"));
    expect(spyNextYear).toHaveBeenCalled();

    rerender(
      <Calendar
        type="year"
        date={date}
        startDate={startDate}
        endDate={endDate}
        startRange={null}
        endRange={null}
        isSundayFirst={false}
        displayWeekends={false}
        isTodosEnabled={false}
        holidays={null}
        onChange={onChange}
      />,
    );
    const years = getByTestId("years-grid");

    expect(years).toBeInTheDocument();

    fireEvent.click(getByTestId("next-button"));
    expect(spyNextDecade).toHaveBeenCalled();
  });

  it("calls onChange when a day is clicked", () => {
    const { getAllByText } = render(
      <Calendar
        date={date}
        startDate={startDate}
        endDate={endDate}
        startRange={null}
        endRange={null}
        isSundayFirst={false}
        displayWeekends={false}
        isTodosEnabled={false}
        holidays={null}
        onChange={onChange}
      />,
    );
    const days = getAllByText("1");
    const firstDay = days[0];

    fireEvent.click(firstDay);
    expect(onChange).toHaveBeenCalledWith(new Date("2022-01-01"));
  });

  it("sets the previous month when the start date is not reached", () => {
    const { getByTestId } = render(
      <Calendar
        date={date}
        startDate={startDate}
        endDate={endDate}
        startRange={null}
        endRange={null}
        isSundayFirst={false}
        displayWeekends={false}
        isTodosEnabled={false}
        holidays={null}
        onChange={onChange}
      />,
    );
    const prevButton = getByTestId("prev-button");

    fireEvent.click(prevButton);

    const title = getByTestId("calendar-title");
    expect(title).toHaveTextContent("December 2021");
  });

  it("doesn't set the previous month when the start date is reached", () => {
    const { getByTestId } = render(
      <Calendar
        date={startDate}
        startDate={startDate}
        endDate={endDate}
        startRange={null}
        endRange={null}
        isSundayFirst={false}
        displayWeekends={false}
        isTodosEnabled={false}
        holidays={null}
        onChange={onChange}
      />,
    );
    const prevButton = getByTestId("prev-button");

    fireEvent.click(prevButton);

    const title = getByTestId("calendar-title");
    expect(title).toHaveTextContent("January 2021");
  });

  it("sets the next month when the end date is not reached", () => {
    const { getByTestId } = render(
      <Calendar
        date={date}
        startDate={startDate}
        endDate={endDate}
        startRange={null}
        endRange={null}
        isSundayFirst={false}
        displayWeekends={false}
        isTodosEnabled={false}
        holidays={null}
        onChange={onChange}
      />,
    );
    const nextButton = getByTestId("next-button");

    fireEvent.click(nextButton);

    const title = getByTestId("calendar-title");
    expect(title).toHaveTextContent("February 2022");
  });

  it("doesn't set the next month when the end date is reached", () => {
    const { getByTestId } = render(
      <Calendar
        date={endDate}
        startDate={startDate}
        endDate={endDate}
        startRange={null}
        endRange={null}
        isSundayFirst={false}
        displayWeekends={false}
        isTodosEnabled={false}
        holidays={null}
        onChange={onChange}
      />,
    );
    const nextButton = getByTestId("next-button");

    fireEvent.click(nextButton);

    const title = getByTestId("calendar-title");
    expect(title).toHaveTextContent("December 2023");
  });

  it("calls the onClick function when clicked", () => {
    const { getByText } = render(
      <Calendar
        date={endDate}
        startDate={startDate}
        endDate={endDate}
        startRange={null}
        endRange={null}
        onChange={onChange}
        isSundayFirst={false}
        displayWeekends={false}
        isTodosEnabled={false}
        holidays={null}
        hasClearButton={true}
      />,
    );
    const button = getByText("Clear");
    expect(button).toBeInTheDocument();
  });
});
