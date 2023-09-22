export type RangeState = "start" | "between" | "end";

export interface CalendarButtonProps {
  title: string;
  isSelected?: boolean;
  isDisabled?: boolean;
  rangeState?: RangeState;
}
