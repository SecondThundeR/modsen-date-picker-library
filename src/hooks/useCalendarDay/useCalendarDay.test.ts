import { act, renderHook } from "@testing-library/react";

import useCalendarDay from "./useCalendarDay";

describe("useCalendarDay", () => {
  const onChange = jest.fn();
  it("should work fine with regular props", () => {
    const { result } = renderHook(() =>
      useCalendarDay({
        date: new Date("01/01/2022"),
        selectedDate: new Date("01/01/2022"),
        selectedMonth: 1,
        startDate: new Date("01/01/2022"),
        endDate: new Date("12/31/2022"),
        startRange: new Date("01/01/2022"),
        endRange: new Date("12/31/2022"),
        displayWeekends: true,
        isTodosEnabled: true,
        holidays: null,
        onChange,
      }),
    );

    expect(result.current.isDateSelected).toBe(true);
    expect(result.current.isNotCurrentMonth).toBe(false);
    expect(result.current.isWeekend).toBe(true);
    expect(result.current.isHoliday).toBe(false);
    expect(result.current.rangeState).toBe("start");

    act(() => {
      result.current.handlers.onDoubleClick();
    });

    expect(result.current.isTodoVisible).toBe(true);

    act(() => {
      result.current.handlers.onModalClose();
    });

    expect(result.current.isTodoVisible).toBe(false);

    act(() => {
      result.current.handlers.onClick();
    });

    expect(onChange).toHaveBeenCalled();
  });
});
