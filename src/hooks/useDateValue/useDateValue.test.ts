import { act, renderHook } from "@testing-library/react";

import useDateValue from "./useDateValue";

describe("useDateValue", () => {
  const dateString = "01/01/2022";
  const newDateString = "01/01/2022";

  it("should render date string", () => {
    const { result } = renderHook(() => useDateValue(dateString));

    expect(result.current.value).toBe(dateString);
  });

  it("should update the value when setInputValue is called", () => {
    const { result } = renderHook(() => useDateValue(dateString));

    expect(result.current.value).toBe(dateString);

    act(() => {
      result.current.handlers.setInputValue(newDateString);
    });

    expect(result.current.value).toBe(newDateString);
  });

  it("should clear the value when clearValue is called", () => {
    const { result } = renderHook(() => useDateValue(dateString));

    expect(result.current.value).toBe(dateString);

    act(() => {
      result.current.handlers.clearValue();
    });

    expect(result.current.value).toBe("");
  });
});
