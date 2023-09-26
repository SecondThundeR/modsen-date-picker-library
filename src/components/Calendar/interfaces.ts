import { Holidays } from "@/utils/calendar";

export interface CalendarProps {
  date: Date;
  startDate: Date;
  endDate: Date;
  isSundayFirst: boolean;
  displayWeekends: boolean;
  holidays: Holidays | null;
  hasClearButton?: boolean;
  onChange: (date: Date) => void;
}
