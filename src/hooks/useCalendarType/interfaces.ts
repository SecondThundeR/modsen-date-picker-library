export type CalendarType = "regular" | "month" | "year";

export interface UseCalendarTypeOptions {
  onChange: (date: Date) => void;
}
