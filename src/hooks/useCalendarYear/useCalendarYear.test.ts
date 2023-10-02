import { act, renderHook } from "@testing-library/react";

import useCalendarYear from "./useCalendarYear";

describe("useCalendarYear", () => {
  const onChange = jest.fn();
  it("should work fine with regular props", () => {
    const { result } = renderHook(() =>
      useCalendarYear({
        date: new Date("01/01/2022"),
        selectedDate: new Date("01/01/2022"),
        startDate: new Date("01/01/2022"),
        endDate: new Date("12/31/2022"),
        startRange: new Date("01/01/2022"),
        endRange: new Date("12/31/2022"),
        onChange,
      }),
    );

    expect(result.current.isYearSelected).toBe(true);
    expect(result.current.isNotInRange).toBe(false);
    expect(result.current.rangeState).toBe("start");

    act(() => {
      result.current.handlers.onClick();
    });

    expect(onChange).toHaveBeenCalled();
  });
});
