import { Holidays } from "@/utils/calendar";

export interface CalendarDayProps {
  date: Date;
  selectedDate: Date;
  selectedMonth: number;
  displayWeekends: boolean;
  holidays: Holidays | null;
  onChange: (changedDate: Date) => void;
}
