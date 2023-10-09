import { DatePickerProps } from "@/components/DatePicker/interfaces";
import { HolidayCountries } from "@/features/api/interfaces";

export interface WithHolidaysAPIProps
  extends Pick<
    DatePickerProps,
    "holidays" | "holidayCountry" | "holidayYear"
  > {}

export interface WithHolidaysAPIOptions {
  holidayCountry?: HolidayCountries;
  year?: number;
}
