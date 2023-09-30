import { act, renderHook } from "@testing-library/react";

import useRangePicker from "./useRangePicker";

describe("useRangePicker", () => {
  it("should update startRange state", () => {
    const { result } = renderHook(() => useRangePicker());

    act(() => {
      result.current.actions.updateStartRange(new Date("2022-01-01"));
    });

    expect(result.current.values.startRange).toEqual(new Date("2022-01-01"));
  });

  it("should update endRange state", () => {
    const { result } = renderHook(() => useRangePicker());

    act(() => {
      result.current.actions.updateEndRange(new Date("2022-01-01"));
    });

    expect(result.current.values.endRange).toEqual(new Date("2022-01-01"));
  });
});
