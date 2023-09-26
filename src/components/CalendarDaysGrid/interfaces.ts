export interface CalendarDaysGridProps {
  currentDate: Date;
  currentMonth: number;
  datesArray: (string | number)[][];
  displayWeekends: boolean;
  onChange: (changedDate: Date) => void;
}
