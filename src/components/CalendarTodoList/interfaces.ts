import { BackdropProps } from "@/components/Backdrop/interfaces";

export interface CalendarTodoProps extends Pick<BackdropProps, "closeModal"> {
  todoDate: Date;
}
