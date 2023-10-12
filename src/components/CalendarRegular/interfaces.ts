import { CalendarProps } from "@/components/Calendar/interfaces";
import { DateState } from "@/utils/date";

export interface CalendarRegularProps
  extends Omit<CalendarProps, "hasClearButton"> {
  dateState: DateState;
}
