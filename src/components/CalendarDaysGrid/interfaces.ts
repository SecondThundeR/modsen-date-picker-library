import { Holidays } from "@/utils/calendar";

export interface CalendarDaysGridProps {
  currentDate: Date;
  currentMonth: number;
  datesArray: (string | number)[][];
  displayWeekends: boolean;
  holidays: Holidays | null;
  onChange: (changedDate: Date) => void;
}
