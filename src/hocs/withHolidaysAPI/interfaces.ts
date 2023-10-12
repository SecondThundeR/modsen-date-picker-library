import { HolidayCountries } from "@/api/interfaces";
import { DatePickerProps } from "@/components/DatePicker/interfaces";

export interface WithHolidaysAPIProps
  extends Pick<
    DatePickerProps,
    "holidays" | "holidayCountry" | "holidayYear"
  > {}

export interface WithHolidaysAPIOptions {
  holidayCountry?: HolidayCountries;
  year?: number;
}
