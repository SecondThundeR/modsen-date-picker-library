import { Holidays } from "@/utils/calendar";

export interface CalendarDaysGridProps {
  currentDate: Date;
  currentMonth: number;
  datesArray: (string | number)[][];
  startRange: Date | null;
  endRange: Date | null;
  displayWeekends: boolean;
  holidays: Holidays | null;
  isTodosEnabled: boolean;
  onChange: (changedDate: Date) => void;
}
