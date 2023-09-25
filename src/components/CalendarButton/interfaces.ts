export type RangeState = "start" | "between" | "end";

export interface CalendarButtonProps {
  title: string | number;
  isSelected?: boolean;
  isDisabled?: boolean;
  rangeState?: RangeState;
  onClick?: () => void;
}

export interface CalendarButtonStyleProps {
  $isSelected?: boolean;
  $isDisabled?: boolean;
  $isCurrentMonth?: boolean;
  $range?: RangeState;
}
