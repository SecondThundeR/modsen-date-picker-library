import { DatePickerProps } from "@/components/DatePicker/interfaces";

export interface RangePickerProps
  extends Pick<
    DatePickerProps,
    | "startDate"
    | "endDate"
    | "holidays"
    | "displayWeekends"
    | "isSundayFirst"
    | "isTodosEnabled"
  > {}
