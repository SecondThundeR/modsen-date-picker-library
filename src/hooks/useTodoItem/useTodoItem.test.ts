import { ChangeEvent } from "react";
import { act, renderHook } from "@testing-library/react";

import useTodoItem from "./useTodoItem";

describe("useTodoItem", () => {
  const todoId = "1";
  const handlers = {
    onDone: jest.fn(),
    onDelete: jest.fn(),
  };
  const checkedEvent = {
    target: {
      checked: true,
    },
  } as ChangeEvent<HTMLInputElement>;

  it("should call onDone handler", () => {
    const { result } = renderHook(() => useTodoItem(todoId, handlers));

    expect(result.current[0]).toBeInstanceOf(Function);

    act(() => {
      result.current[0](checkedEvent);
    });

    expect(handlers.onDone).toHaveBeenCalledWith(todoId, true);
  });

  it("should call onDone handler", () => {
    const { result } = renderHook(() => useTodoItem(todoId, handlers));

    expect(result.current[1]).toBeInstanceOf(Function);

    act(() => {
      result.current[1]();
    });

    expect(handlers.onDelete).toHaveBeenCalledWith(todoId);
  });
});
