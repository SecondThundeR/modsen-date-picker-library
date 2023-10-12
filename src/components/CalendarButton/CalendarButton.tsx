import React, { memo } from "react";

import { Item } from "./CalendarButton.styled";
import { CalendarButtonProps } from "./interfaces";

const CalendarButton = memo(function CalendarButton({
  title,
  rangeState,
  unlockedSize = false,
  isSelected = false,
  isDisabled = false,
  isWeekend = false,
  isHoliday = false,
  onClick,
  onDoubleClick,
}: CalendarButtonProps) {
  return (
    <Item
      $unlockedSize={unlockedSize}
      $isSelected={isSelected}
      $range={rangeState}
      $isDisabled={isDisabled}
      $isWeekend={isWeekend}
      $isHoliday={isHoliday}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      {title}
    </Item>
  );
});

export default CalendarButton;
