export type RangeState = "start" | "between" | "end";

export interface CalendarButtonProps {
  title: string | number;
  unlockedSize?: boolean;
  isSelected?: boolean;
  isDisabled?: boolean;
  isWeekend?: boolean;
  isHoliday?: boolean;
  rangeState?: RangeState;
  onClick?: () => void;
  onDoubleClick?: () => void;
}

export interface CalendarButtonStyleProps {
  $unlockedSize?: boolean;
  $isSelected?: boolean;
  $isDisabled?: boolean;
  $isCurrentMonth?: boolean;
  $isWeekend?: boolean;
  $isHoliday?: boolean;
  $range?: RangeState;
}
