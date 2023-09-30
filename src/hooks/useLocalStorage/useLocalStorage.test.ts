import { act, renderHook } from "@testing-library/react";

import useLocalStorage from "./useLocalStorage";

describe("useLocalStorage", () => {
  it("should update data state", () => {
    const { result } = renderHook(() => useLocalStorage<string>("test"));

    act(() => {
      result.current.onLocalUpdate("hello");
    });

    expect(result.current.onGetData()).toEqual("hello");
  });

  it("should delete data state", () => {
    const { result } = renderHook(() => useLocalStorage<string>("test"));

    act(() => {
      result.current.onLocalUpdate("hello");
    });

    act(() => {
      result.current.onLocalDelete();
    });

    expect(result.current.onGetData()).toBeUndefined();
  });
});
