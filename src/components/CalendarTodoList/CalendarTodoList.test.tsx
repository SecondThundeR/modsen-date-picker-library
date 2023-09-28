import React from "react";
import { fireEvent, render } from "@testing-library/react";

import CalendarTodoList from "./CalendarTodoList";

describe("CalendarTodoList", () => {
  const todoDate = new Date("2022-01-01");
  const onModalClose = jest.fn();

  test("should stop propagation on click", () => {
    const { getByTestId } = render(
      <CalendarTodoList todoDate={todoDate} closeModal={onModalClose} />,
    );

    const modal = getByTestId("todo-modal");
    fireEvent.click(modal);

    expect(onModalClose).not.toHaveBeenCalled();
  });

  test("should not render empty todos", () => {
    const { getByText } = render(
      <CalendarTodoList todoDate={todoDate} closeModal={jest.fn()} />,
    );

    expect(getByText("Hint: Try to add some todos!")).toBeInTheDocument();
  });

  test("should not render empty todos", () => {
    const { getByText, getByTestId } = render(
      <CalendarTodoList todoDate={todoDate} closeModal={jest.fn()} />,
    );

    fireEvent.change(getByTestId("todo-input"), {
      target: { value: "Todo 1" },
    });
    fireEvent.click(getByText("Add todo"));

    expect(getByText("Todo 1")).toBeInTheDocument();
  });
});
