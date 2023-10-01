import { act, renderHook } from "@testing-library/react";

import useCalendarNavigation from "./useCalendarNavigation";

describe("useCalendarNavigation", () => {
  const date = new Date("06/01/2022");
  const startDate = new Date("01/01/2022");
  const endDate = new Date("12/31/2022");
  const type = "regular";

  it("should work fine with regular props", () => {
    const { result } = renderHook(() =>
      useCalendarNavigation({ date, startDate, endDate, type }),
    );

    expect(result.current.dateState.month).toBe(6);
    expect(result.current.dateState.year).toBe(2022);

    act(() => {
      result.current.handlers.onPrevClick();
    });

    expect(result.current.dateState.month).toBe(5);
    expect(result.current.dateState.year).toBe(2022);

    act(() => {
      result.current.handlers.onNextClick();
    });

    expect(result.current.dateState.month).toBe(6);
    expect(result.current.dateState.year).toBe(2022);
  });
});
