import { act, renderHook } from "@testing-library/react";

import { UseDateValueRenderHook } from "./interfaces";
import useDateValue from "./useDateValue";

describe("useDateValue", () => {
  test("should update type and return the formatted date value", () => {
    const dateString = "01/01/2022";
    const { result, rerender } = renderHook(
      ({ dateString, type }: UseDateValueRenderHook) =>
        useDateValue(dateString, type),
      {
        initialProps: {
          dateString,
          type: "regular",
        },
      },
    );

    expect(result.current.value).toBe("01/01/2022");

    rerender({ dateString, type: "month" });

    expect(result.current.value).toBe("01/2022");

    rerender({ dateString, type: "year" });

    expect(result.current.value).toBe("2022");
  });

  test("should update the value when setInputValue is called", () => {
    const dateString = "01/01/2022";
    const type = "regular";
    const { result } = renderHook(() => useDateValue(dateString, type));

    expect(result.current.value).toBe("01/01/2022");

    act(() => {
      result.current.handlers.setInputValue("02/01/2022");
    });

    expect(result.current.value).toBe("02/01/2022");
  });

  test("should clear the value when clearValue is called", () => {
    const dateString = "01/01/2022";
    const type = "regular";
    const { result } = renderHook(() => useDateValue(dateString, type));

    expect(result.current.value).toBe("01/01/2022");

    act(() => {
      result.current.handlers.clearValue();
    });

    expect(result.current.value).toBe("");
  });
});
