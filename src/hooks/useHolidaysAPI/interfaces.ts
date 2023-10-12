import { HolidayCountries } from "@/api/interfaces";
import { Holidays } from "@/utils/calendar";

export interface UseHolidaysAPIOptions {
  holidayCountry: HolidayCountries;
  year: number;
}

export interface HolidaysLocalStorage {
  holidays: Holidays;
  lastUpdated: number;
}
