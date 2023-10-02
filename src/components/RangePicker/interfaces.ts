import { DatePickerProps } from "@/components/DatePicker/interfaces";

export interface RangePickerProps
  extends Pick<
    DatePickerProps,
    | "type"
    | "startDate"
    | "endDate"
    | "holidays"
    | "displayWeekends"
    | "isSundayFirst"
    | "isTodosEnabled"
  > {}
