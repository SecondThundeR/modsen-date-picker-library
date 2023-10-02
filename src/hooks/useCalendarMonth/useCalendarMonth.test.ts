import { act, renderHook } from "@testing-library/react";

import useCalendarMonth from "./useCalendarMonth";

describe("useCalendarMonth", () => {
  const onChange = jest.fn();
  it("should work fine with regular props", () => {
    const { result } = renderHook(() =>
      useCalendarMonth({
        date: new Date("01/01/2022"),
        selectedDate: new Date("01/01/2022"),
        startDate: new Date("01/01/2022"),
        endDate: new Date("12/31/2022"),
        startRange: new Date("01/01/2022"),
        endRange: new Date("12/31/2022"),
        onChange,
      }),
    );

    expect(result.current.isMonthSelected).toBe(true);
    expect(result.current.rangeState).toBe("start");

    act(() => {
      result.current.handlers.onClick();
    });

    expect(onChange).toHaveBeenCalled();
  });
});
