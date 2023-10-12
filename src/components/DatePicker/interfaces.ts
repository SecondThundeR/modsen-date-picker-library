import { HolidayCountries } from "@/api/interfaces";
import { Holidays } from "@/utils/calendar";

export interface DatePickerProps {
  title?: string;
  startDate?: Date;
  endDate?: Date;
  startRange?: Date | null;
  isPickingStart?: boolean;
  endRange?: Date | null;
  isPickingEnd?: boolean;
  holidays?: Holidays | null;
  holidayCountry?: HolidayCountries;
  holidayYear?: number;
  displayWeekends?: boolean;
  isSundayFirst?: boolean;
  isTodosEnabled?: boolean;
  onChange?: (date: Date | null) => void;
}
