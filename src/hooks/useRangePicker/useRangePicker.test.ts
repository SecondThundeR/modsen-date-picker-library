import { act, renderHook } from "@testing-library/react";

import useRangePicker from "./useRangePicker";

describe("useRangePicker", () => {
  it("should update ranges", () => {
    const { result } = renderHook(() => useRangePicker());

    act(() => {
      result.current.actions.onUpdate(new Date("01/01/2022"));
    });

    expect(result.current.values.startRange).toEqual(new Date("01/01/2022"));

    act(() => {
      result.current.actions.onUpdate(new Date("01/02/2022"));
    });

    expect(result.current.values.endRange).toEqual(new Date("01/02/2022"));
  });
});
