import { Holidays } from "@/utils/calendar";

export interface CalendarDayProps {
  date: Date;
  startRange: Date | null;
  endRange: Date | null;
  selectedDate: Date;
  selectedMonth: number;
  displayWeekends: boolean;
  holidays: Holidays | null;
  isTodosEnabled: boolean;
  onChange: (changedDate: Date) => void;
}
