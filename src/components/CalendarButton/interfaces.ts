export type RangeState = "start" | "between" | "end";

export interface CalendarButtonProps {
  title: string | number;
  isSelected?: boolean;
  isDisabled?: boolean;
  isWeekday?: boolean;
  isHoliday?: boolean;
  rangeState?: RangeState;
  onClick?: () => void;
}

export interface CalendarButtonStyleProps {
  $isSelected?: boolean;
  $isDisabled?: boolean;
  $isCurrentMonth?: boolean;
  $isWeekday?: boolean;
  $isHoliday?: boolean;
  $range?: RangeState;
}
