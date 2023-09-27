import { Holidays } from "@/utils/calendar";

export interface CalendarProps {
  date: Date;
  startDate: Date;
  endDate: Date;
  startRange: Date | null;
  endRange: Date | null;
  isSundayFirst: boolean;
  displayWeekends: boolean;
  holidays: Holidays | null;
  hasClearButton?: boolean;
  onChange: (date: Date) => void;
}
