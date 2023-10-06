export interface InputProps {
  title?: string;
  dateString: string;
  startDate?: Date;
  endDate?: Date;
  isCalendarEnabled?: boolean;
  onDateChange: (date: Date) => void;
  onCalendarClick: () => void;
  onClearClick: () => void;
}
