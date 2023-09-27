export type RangeState = "start" | "between" | "end";

export interface CalendarButtonProps {
  title: string | number;
  isSelected?: boolean;
  isDisabled?: boolean;
  isWeekend?: boolean;
  isHoliday?: boolean;
  rangeState?: RangeState;
  onClick?: () => void;
}

export interface CalendarButtonStyleProps {
  $isSelected?: boolean;
  $isDisabled?: boolean;
  $isCurrentMonth?: boolean;
  $isWeekend?: boolean;
  $isHoliday?: boolean;
  $range?: RangeState;
}
