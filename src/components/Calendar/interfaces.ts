export interface CalendarProps {
  date: Date;
  startDate: Date;
  endDate: Date;
  isSundayFirst: boolean;
  displayWeekends: boolean;
  hasClearButton?: boolean;
  onChange: (date: Date) => void;
}
