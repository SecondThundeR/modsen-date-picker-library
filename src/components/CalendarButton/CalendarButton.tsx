import React, { memo } from "react";

import { Item } from "./CalendarButton.styled";
import { CalendarButtonProps } from "./interfaces";

const CalendarButton = memo(function CalendarButton({
  title,
  rangeState,
  isSelected = false,
  isDisabled = false,
}: CalendarButtonProps) {
  return (
    <Item $selected={isSelected} disabled={isDisabled} $range={rangeState}>
      {title}
    </Item>
  );
});

export default CalendarButton;
