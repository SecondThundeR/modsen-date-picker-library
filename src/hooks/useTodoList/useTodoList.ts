import { ChangeEventHandler, useCallback, useState } from "react";

import { TodoElement } from "@/components/CalendarTodoItem/interfaces";
import { useLocalStorage } from "@/hooks";

function useTodoList(date: Date) {
  const { onGetData, onLocalUpdate, onLocalDelete } = useLocalStorage<
    TodoElement[]
  >(`todo-${date.toLocaleDateString()}`);
  const [todos, setTodos] = useState<TodoElement[]>(() => onGetData() ?? []);
  const [todoInput, setTodoInput] = useState("");

  const onAddClick = useCallback(() => {
    if (todoInput.length === 0) return;
    const newTodo = {
      id: String(new Date().getTime()),
      value: todoInput,
      done: false,
    };
    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
    onLocalUpdate(newTodos);
    setTodoInput("");
  }, [onLocalUpdate, todoInput, todos]);

  const onTodoDone = useCallback(
    (id: string, doneState: boolean) => {
      const updatedTodos = todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          done: doneState,
        };
      });

      setTodos(updatedTodos);
      onLocalUpdate(todos);
    },
    [onLocalUpdate, todos],
  );

  const onTodoDelete = useCallback(
    (id: string) => {
      const newTodos = todos.filter((todo) => todo.id !== id);

      setTodos(newTodos);
      onLocalUpdate(newTodos);
      if (newTodos.length > 0) return;
      onLocalDelete();
    },
    [onLocalDelete, onLocalUpdate, todos],
  );

  const onTodoChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setTodoInput(event.target.value);
    },
    [],
  );

  return {
    todos,
    todoInput,
    handlers: {
      onAddClick,
      onTodoChange,
      onTodoDone,
      onTodoDelete,
    },
  };
}

export default useTodoList;
