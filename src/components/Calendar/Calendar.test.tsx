import React from "react";
import { fireEvent, render } from "@testing-library/react";

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
