export interface TodoElement {
  id: string;
  value: string;
  done: boolean;
}

export interface CalendarTodoItemProps {
  todo: TodoElement;
  onDone: (id: string, doneState: boolean) => void;
  onDelete: (id: string) => void;
}
