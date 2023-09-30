import React, { memo, useCallback } from "react";

import CalendarButton from "@/components/CalendarButton";
import {
  extractDateState,
  isDateInEndRange,
  isDateInRange,
  isDateInStartRange,
} from "@/utils/calendar";
import { isDatesMonthsEqual } from "@/utils/date";

import { CalendarMonthsButtonProps } from "./interfaces";

const CalendarMonthsButton = memo(function CalendarMonthsButton({
  title,
  date,
  selectedDate,
  endDate,
  endRange,
  startDate,
  startRange,
  onChange,
}: CalendarMonthsButtonProps) {
  const isMonthSelected = isDatesMonthsEqual(date, selectedDate);
  const isStartRangeMonth = isDatesMonthsEqual(date, startRange);
  const isEndRangeMonth = isDatesMonthsEqual(date, endRange);
  const isBetweenRangeDates = isDateInRange(startRange, endRange, date);

  const rangeState = isStartRangeMonth
    ? "start"
    : isEndRangeMonth
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
        isSelected={isMonthSelected}
        onClick={onClick}
      />
    </>
  );
});

export default CalendarMonthsButton;
