import { renderHook } from "@testing-library/react";

import useClearEnabled from "./useClearEnabled";

describe("useClearEnabled", () => {
  it("should return true if value is not empty", () => {
    const { result } = renderHook(() => useClearEnabled("test"));

    expect(result.current).toBe(true);
  });

  it("should return false if value is empty", () => {
    const { result } = renderHook(() => useClearEnabled(""));

    expect(result.current).toBe(false);
  });

  it("should return false if value is undefined", () => {
    const { result } = renderHook(() => useClearEnabled(undefined));

    expect(result.current).toBe(false);
  });

  it("should update isClearEnabled when value changes", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useClearEnabled(value),
      { initialProps: { value: "" } },
    );

    expect(result.current).toBe(false);

    rerender({ value: "test" });

    expect(result.current).toBe(true);
  });
});
