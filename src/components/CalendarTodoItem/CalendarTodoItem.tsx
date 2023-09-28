import React, { memo } from "react";

import CalendarButton from "@/components/CalendarButton";
import { useTodoItem } from "@/hooks";

import { Title, Wrapper } from "./CalendarTodoItem.styled";
import { CalendarTodoItemProps } from "./interfaces";

const CalendarTodoItem = memo(function CalendarTodoItem({
  todo,
  onDone,
  onDelete,
}: CalendarTodoItemProps) {
  const { id, value, done } = todo;
  const [onDoneHandler, onDeleteHandler] = useTodoItem(id, {
    onDone,
    onDelete,
  });

  return (
    <Wrapper>
      <input type="checkbox" onChange={onDoneHandler} checked={done} />
      <Title $isChecked={todo.done}>{value}</Title>
      <CalendarButton title="Delete" unlockedSize onClick={onDeleteHandler} />
    </Wrapper>
  );
});

export default CalendarTodoItem;
