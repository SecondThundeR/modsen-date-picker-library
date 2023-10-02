import React, { memo, MouseEventHandler, useCallback } from "react";

import Backdrop from "@/components/Backdrop";
import CalendarButton from "@/components/CalendarButton";
import CalendarTodoItem from "@/components/CalendarTodoItem";
import { useTodoList } from "@/hooks";

import {
  FooterHint,
  Hint,
  Input,
  InputWrapper,
  ListWrapper,
  Title,
  Wrapper,
} from "./CalendarTodoList.styled";
import { CalendarTodoProps } from "./interfaces";

const CalendarTodo = memo(function CalendarTodo({
  todoDate,
  closeModal,
}: CalendarTodoProps) {
  const {
    todos,
    todoInput,
    handlers: { onAddClick, onTodoChange, onTodoDone, onTodoDelete },
  } = useTodoList(todoDate);

  const stopModalPropagation: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => event.stopPropagation(),
    [],
  );

  return (
    <Backdrop closeModal={closeModal}>
      <Wrapper data-testid="todo-modal" onClick={stopModalPropagation}>
        <Title>Todo for {todoDate.toDateString()}</Title>
        <InputWrapper>
          <Input
            data-testid="todo-input"
            value={todoInput}
            onChange={onTodoChange}
            placeholder="Enter todo text"
          />
          <CalendarButton
            title="Add todo"
            onClick={onAddClick}
            isSelected
            unlockedSize
          />
        </InputWrapper>
        {todos.length > 0 ? (
          <ListWrapper>
            {todos.map((todo) => {
              return (
                <CalendarTodoItem
                  key={todo.id}
                  todo={todo}
                  onDelete={onTodoDelete}
                  onDone={onTodoDone}
                />
              );
            })}
          </ListWrapper>
        ) : (
          <Hint>Hint: Try to add some todos!</Hint>
        )}
        <FooterHint>Click outside to close this modal</FooterHint>
      </Wrapper>
    </Backdrop>
  );
});

export default CalendarTodo;
