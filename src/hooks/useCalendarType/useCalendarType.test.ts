import { act, renderHook } from "@testing-library/react";

import useCalendarType from "./useCalendarType";

describe("useCalendarType", () => {
  it("should return to regular type when calling onDateChange", () => {
    const { result } = renderHook(() =>
      useCalendarType({ onChange: jest.fn() }),
    );

    expect(result.current.type).toBe("regular");

    act(() => {
      result.current.handlers.onTitle();
    });

    expect(result.current.type).toBe("month");

    act(() => {
      result.current.handlers.onDateChange(new Date());
    });

    expect(result.current.type).toBe("regular");

    act(() => {
      result.current.handlers.onTitle();
    });
    act(() => {
      result.current.handlers.onTitle();
    });

    expect(result.current.type).toBe("year");

    act(() => {
      result.current.handlers.onDateChange(new Date());
    });

    expect(result.current.type).toBe("regular");
  });
});
