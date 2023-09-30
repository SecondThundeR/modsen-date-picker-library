import React from "react";
import { fireEvent, render } from "@testing-library/react";

import CalendarTodoItem from "./CalendarTodoItem";

describe("CalendarTodoItem", () => {
  const todo = { id: "1", value: "Test", done: false };
  const todoDone = { id: "1", value: "Test", done: true };
  const onDone = jest.fn();
  const onDelete = jest.fn();

  it("should render correctly", () => {
    const { getByText } = render(
      <CalendarTodoItem todo={todo} onDone={onDone} onDelete={onDelete} />,
    );

    expect(getByText("Test")).toBeInTheDocument();
  });

  it("should call onDone when checkbox is clicked", () => {
    const { getByRole } = render(
      <CalendarTodoItem todo={todo} onDone={onDone} onDelete={onDelete} />,
    );

    fireEvent.click(getByRole("checkbox"));

    expect(onDone).toHaveBeenCalled();
  });

  it("should have proper decoration for done todo", () => {
    const { getByText } = render(
      <CalendarTodoItem todo={todoDone} onDone={onDone} onDelete={onDelete} />,
    );

    expect(getByText("Test")).toHaveStyleRule(
      "text-decoration",
      "line-through",
    );
  });

  it("should call onDelete when delete button is clicked", () => {
    const { getByRole } = render(
      <CalendarTodoItem todo={todo} onDone={onDone} onDelete={onDelete} />,
    );

    fireEvent.click(getByRole("button"));

    expect(onDelete).toHaveBeenCalled();
  });
});
