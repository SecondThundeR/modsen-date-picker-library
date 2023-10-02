import { CalendarProps } from "@/components/Calendar/interfaces";
import { DateState } from "@/utils/calendar";

export interface CalendarYearsProps
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
