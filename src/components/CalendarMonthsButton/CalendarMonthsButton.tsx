import React, { memo } from "react";

import CalendarButton from "@/components/CalendarButton";
import { useCalendarMonth } from "@/hooks";

import { CalendarMonthsButtonProps } from "./interfaces";

const CalendarMonthsButton = memo(function CalendarMonthsButton({
  title,
  ...props
}: CalendarMonthsButtonProps) {
  const {
    rangeState,
    isMonthSelected,
    handlers: { onClick },
  } = useCalendarMonth(props);

  return (
    <CalendarButton
      title={title}
      unlockedSize
      rangeState={rangeState}
      isSelected={isMonthSelected}
      onClick={onClick}
    />
  );
});

export default CalendarMonthsButton;
