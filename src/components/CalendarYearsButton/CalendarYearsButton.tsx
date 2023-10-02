import React, { memo } from "react";

import CalendarButton from "@/components/CalendarButton";
import useCalendarYear from "@/hooks/useCalendarYear";

import { CalendarYearsButtonProps } from "./interfaces";

const CalendarYearsButton = memo(function CalendarYearsButton({
  title,
  ...props
}: CalendarYearsButtonProps) {
  const {
    isYearSelected,
    isNotInRange,
    rangeState,
    handlers: { onClick },
  } = useCalendarYear(props);

  return (
    <>
      <CalendarButton
        title={title}
        unlockedSize
        rangeState={rangeState}
        isSelected={isYearSelected}
        isDisabled={isNotInRange}
        onClick={onClick}
      />
    </>
  );
});

export default CalendarYearsButton;
