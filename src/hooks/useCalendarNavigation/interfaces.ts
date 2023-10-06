import { CalendarType } from "@/hooks/useCalendarType/interfaces";

export interface UseCalendarNavigationOptions {
  date: Date;
  startDate: Date;
  endDate: Date;
  type: CalendarType;
}
