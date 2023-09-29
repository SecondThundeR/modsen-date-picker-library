import { Holidays } from "@/utils/calendar";

export type CalendarType = "regular" | "month" | "year";

export interface CalendarProps {
  date: Date;
  type: CalendarType;
  startDate: Date;
  endDate: Date;
  startRange: Date | null;
  endRange: Date | null;
  isSundayFirst: boolean;
  displayWeekends: boolean;
  holidays: Holidays | null;
  isTodosEnabled: boolean;
  hasClearButton?: boolean;
  onChange: (date: Date) => void;
}
