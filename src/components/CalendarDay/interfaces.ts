export interface CalendarDayProps {
  date: Date;
  selectedDate: Date;
  selectedMonth: number;
  displayWeekends: boolean;
  onChange: (changedDate: Date) => void;
}
