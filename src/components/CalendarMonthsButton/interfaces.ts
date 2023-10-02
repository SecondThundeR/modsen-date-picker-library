import { CalendarMonthsProps } from "@/components/CalendarMonths/interfaces";

export interface CalendarMonthsButtonProps
  extends Omit<CalendarMonthsProps, "dateState"> {
  title: string;
  selectedDate: Date;
}
