import { CalendarType } from "@/components/Calendar/interfaces";

export interface InputProps {
  title?: string;
  type?: CalendarType;
  dateString: string;
  startDate?: Date;
  endDate?: Date;
  isCalendarEnabled?: boolean;
  onDateChange: (date: Date) => void;
  onCalendarClick: () => void;
  onClearClick: () => void;
}
