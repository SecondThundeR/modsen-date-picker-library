import React, { memo, useCallback } from "react";

import CalendarButton from "@/components/CalendarButton";
import {
  extractDateState,
  isDateInEndRange,
  isDateInRange,
  isDateInStartRange,
} from "@/utils/calendar";
import { isDatesYearsEqual, isInRange } from "@/utils/date";

import { CalendarYearsButtonProps } from "./interfaces";

const CalendarYearsButton = memo(function CalendarYearsButton({
  title,
  date,
  selectedDate,
  endDate,
  endRange,
  startDate,
  startRange,
  onChange,
}: CalendarYearsButtonProps) {
  const isYearSelected = isDatesYearsEqual(date, selectedDate);
  const isStartRangeYear = isDatesYearsEqual(date, startRange);
  const isEndRangeYear = isDatesYearsEqual(date, endRange);
  const isBetweenRangeDates = isDateInRange(startRange, endRange, date);
  const isNotInRange = !isInRange(date, startDate, endDate);

  const rangeState = isStartRangeYear
    ? "start"
    : isEndRangeYear
    ? "end"
    : isBetweenRangeDates
    ? "between"
    : undefined;

  const onClick = useCallback(() => {
    if (
      !isDateInStartRange(startDate, extractDateState(date)) ||
      !isDateInEndRange(endDate, extractDateState(date))
    )
      return;
    onChange(date);
  }, [date, endDate, onChange, startDate]);

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
