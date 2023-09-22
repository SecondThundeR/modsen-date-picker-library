import { CalendarButtonProps } from "../CalendarButton/interfaces";

export type CalendarWeekRowItem = Omit<CalendarButtonProps, "title"> & {
  value: string;
};

export interface CalendarWeekRowProps {
  items: CalendarWeekRowItem[];
}
