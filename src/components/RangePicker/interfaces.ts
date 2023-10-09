import { DatePickerProps } from "@/components/DatePicker/interfaces";

export interface RangePickerProps
  extends Pick<
    DatePickerProps,
    | "startDate"
    | "endDate"
    | "holidays"
    | "holidayCountry"
    | "holidayYear"
    | "displayWeekends"
    | "isSundayFirst"
    | "isTodosEnabled"
  > {}
