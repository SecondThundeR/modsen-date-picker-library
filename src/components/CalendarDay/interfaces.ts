export interface CalendarDayProps {
  date: Date;
  selectedDate: Date;
  selectedMonth: number;
  onChange: (changedDate: Date) => void;
}
