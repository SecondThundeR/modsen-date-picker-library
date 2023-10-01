import { CalendarType } from "@/components/Calendar/interfaces";

export interface UseCalendarNavigationOptions {
  date: Date;
  startDate: Date;
  endDate: Date;
  type: CalendarType;
}
