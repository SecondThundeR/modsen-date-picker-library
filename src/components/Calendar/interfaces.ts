export interface CalendarProps {
  hasClearButton?: boolean;
  date: Date;
  startDate: Date;
  endDate: Date;
  isSundayFirst?: boolean;
  onChange: (date: Date) => void;
}
