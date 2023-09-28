import { ChangeEventHandler, useCallback } from "react";

function useTodoItem(
  todoId: string,
  handlers: {
    onDone: (id: string, doneState: boolean) => void;
    onDelete: (id: string) => void;
  },
): [ChangeEventHandler<HTMLInputElement>, () => void] {
  const { onDone, onDelete } = handlers;
  const onDoneHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const checked = event.target.checked;
      onDone(todoId, checked);
    },
    [todoId, onDone],
  );

  const onDeleteHandler = useCallback(() => {
    onDelete(todoId);
  }, [todoId, onDelete]);

  return [onDoneHandler, onDeleteHandler];
}

export default useTodoItem;
