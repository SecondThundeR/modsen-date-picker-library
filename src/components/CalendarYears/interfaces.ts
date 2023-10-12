import { CalendarProps } from "@/components/Calendar/interfaces";
import { DateState } from "@/utils/date";

export interface CalendarYearsProps
  extends Omit<
    CalendarProps,
    | "hasClearButton"
    | "displayWeekends"
    | "holidays"
    | "isSundayFirst"
    | "isTodosEnabled"
  > {
  dateState: DateState;
}
