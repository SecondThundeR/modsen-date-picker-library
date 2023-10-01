import React from "react";
import { fireEvent, render } from "@testing-library/react";

import CalendarMonthsButton from "./CalendarMonthsButton";

describe("CalendarMonthsButton", () => {
  const dateStart = new Date("01/01/2021");
  const dateEnd = new Date("01/01/2023");
  const startDate = new Date("01/02/2022");
  const endDate = new Date("12/31/2022");
  const onChange = jest.fn();

  it("onChange doesn't call on incorrect ranges", () => {
    const { rerender, getByRole } = render(
      <CalendarMonthsButton
        title="Jan"
        date={dateStart}
        selectedDate={startDate}
        startDate={startDate}
        endDate={endDate}
        startRange={null}
        endRange={null}
        onChange={onChange}
      />,
    );
    const startRangeButton = getByRole("button");
    fireEvent.click(startRangeButton);
    expect(onChange).not.toBeCalled();

    rerender(
      <CalendarMonthsButton
        title="Dec"
        date={dateEnd}
        selectedDate={startDate}
        startDate={startDate}
        endDate={endDate}
        startRange={null}
        endRange={null}
        onChange={onChange}
      />,
    );
    const endRangeButton = getByRole("button");
    fireEvent.click(endRangeButton);
    expect(onChange).not.toBeCalled();
  });
});
