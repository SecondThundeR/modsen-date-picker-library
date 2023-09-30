import { CalendarProps } from "@/components/Calendar/interfaces";
import { DateState } from "@/utils/calendar";

export interface CalendarMonthsProps
  extends Omit<
    CalendarProps,
    | "type"
    | "hasClearButton"
    | "displayWeekends"
    | "holidays"
    | "isSundayFirst"
    | "isTodosEnabled"
  > {
  dateState: DateState;
}
