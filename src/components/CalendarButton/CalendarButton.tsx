import React, { memo } from "react";

import { Item } from "./CalendarButton.styled";
import { CalendarButtonProps } from "./interfaces";

const CalendarButton = memo(function CalendarButton({
  title,
  rangeState,
  isSelected = false,
  isDisabled = false,
  isWeekday = false,
  onClick,
}: CalendarButtonProps) {
  return (
    <Item
      $isSelected={isSelected}
      $range={rangeState}
      $isDisabled={isDisabled}
      $isWeekday={isWeekday}
      onClick={onClick}
    >
      {title}
    </Item>
  );
});

export default CalendarButton;
