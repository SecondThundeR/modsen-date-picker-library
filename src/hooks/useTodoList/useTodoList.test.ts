import { ChangeEvent } from "react";
import { act, renderHook } from "@testing-library/react";

import useLocalStorage from "@/hooks/useLocalStorage";

import useTodoList from "./useTodoList";

jest.mock("@/hooks/useLocalStorage/useLocalStorage");

const mockUseLocalStorage = useLocalStorage as jest.MockedFunction<
  typeof useLocalStorage
>;

describe("useTodoList", () => {
  const date = new Date("2022-01-01");
  const onLocalDelete = jest.fn();

  beforeEach(() => {
    mockUseLocalStorage.mockReturnValue({
      onGetData: jest.fn().mockReturnValue([]),
      onLocalDelete,
      onLocalUpdate: jest.fn(),
    });
  });

  it("should correctly init data", () => {
    const { result } = renderHook(() => useTodoList(date));

    expect(result.current.todos).toEqual([]);
    expect(result.current.todoInput).toEqual("");
  });

  it("should correctly init data", () => {
    const { result } = renderHook(() => useTodoList(date));

    expect(result.current.todos).toEqual([]);
    expect(result.current.todoInput).toEqual("");
  });

  it("should not add todo on empty input", () => {
    const { result } = renderHook(() => useTodoList(date));
    act(() => {
      result.current.handlers.onAddClick();
    });

    expect(result.current.todos).toEqual([]);
    expect(result.current.todoInput).toEqual("");
  });

  it("should add todo on non-empty input", () => {
    jest.spyOn(Date.prototype, "getTime").mockReturnValueOnce(123);
    const { result } = renderHook(() => useTodoList(date));
    act(() => {
      result.current.handlers.onTodoChange({
        target: { value: "hello" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.todoInput).toEqual("hello");

    act(() => {
      result.current.handlers.onAddClick();
    });

    expect(result.current.todos).toEqual([
      {
        id: "123",
        value: "hello",
        done: false,
      },
    ]);
    expect(result.current.todoInput).toEqual("");
  });

  it("should correctly toggle todo", () => {
    jest.spyOn(Date.prototype, "getTime").mockReturnValueOnce(123);
    const { result } = renderHook(() => useTodoList(date));
    act(() => {
      result.current.handlers.onTodoChange({
        target: { value: "hello" },
      } as ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handlers.onAddClick();
    });

    expect(result.current.todos).toEqual([
      {
        id: "123",
        value: "hello",
        done: false,
      },
    ]);

    act(() => {
      result.current.handlers.onTodoDone("123", true);
    });

    expect(result.current.todos).toEqual([
      {
        id: "123",
        value: "hello",
        done: true,
      },
    ]);

    act(() => {
      result.current.handlers.onTodoDone("123", false);
    });

    act(() => {
      result.current.handlers.onTodoDone("1234", true);
    });
    expect(result.current.todos).toEqual([
      {
        id: "123",
        value: "hello",
        done: false,
      },
    ]);
  });

  it("should not call local storage delete on non-last todo removal", () => {
    jest.spyOn(Date.prototype, "getTime").mockReturnValueOnce(123);
    const { result } = renderHook(() => useTodoList(date));
    act(() => {
      result.current.handlers.onTodoChange({
        target: { value: "hello" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.todoInput).toEqual("hello");

    act(() => {
      result.current.handlers.onAddClick();
    });

    jest.spyOn(Date.prototype, "getTime").mockReturnValueOnce(1234);
    act(() => {
      result.current.handlers.onTodoChange({
        target: { value: "hello" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.todoInput).toEqual("hello");

    act(() => {
      result.current.handlers.onAddClick();
    });

    expect(onLocalDelete).not.toHaveBeenCalled();
    act(() => {
      result.current.handlers.onTodoDelete("1234");
    });
    expect(onLocalDelete).not.toHaveBeenCalled();
  });

  it("should call local storage delete on last todo removal", () => {
    jest.spyOn(Date.prototype, "getTime").mockReturnValueOnce(123);
    const { result } = renderHook(() => useTodoList(date));
    act(() => {
      result.current.handlers.onTodoChange({
        target: { value: "hello" },
      } as ChangeEvent<HTMLInputElement>);
      result.current.handlers.onAddClick();
    });

    expect(onLocalDelete).not.toHaveBeenCalled();
    act(() => {
      result.current.handlers.onTodoDelete("123");
    });
    expect(onLocalDelete).toHaveBeenCalled();
    expect(result.current.todos).toEqual([]);
    expect(result.current.todos.length).toEqual(0);
  });
});
