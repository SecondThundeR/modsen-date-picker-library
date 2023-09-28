import { BackdropProps } from "../Backdrop/interfaces";

export interface CalendarTodoProps extends Pick<BackdropProps, "closeModal"> {
  todoDate: Date;
}
