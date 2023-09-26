export interface CalendarDaysGridProps {
  currentDate: Date;
  currentMonth: number;
  datesArray: (string | number)[][];
  onChange: (changedDate: Date) => void;
}
