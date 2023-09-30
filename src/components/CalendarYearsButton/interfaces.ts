import { CalendarYearsProps } from "@/components/CalendarYears/interfaces";

export interface CalendarYearsButtonProps
  extends Omit<CalendarYearsProps, "dateState"> {
  title: string;
  selectedDate: Date;
}
