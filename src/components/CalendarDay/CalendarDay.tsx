import React, { memo, useCallback } from "react";

import CalendarButton from "@/components/CalendarButton";
import {
  isDateAHoliday,
  isDateAWeekend,
  isDateInRange,
} from "@/utils/calendar";
import { isDatesEqual } from "@/utils/date";

import { CalendarDayProps } from "./interfaces";

const CalendarDay = memo(function CalendarDay({
  date,
  startRange,
  endRange,
  selectedDate,
  selectedMonth,
  displayWeekends,
  holidays,
  onChange,
}: CalendarDayProps) {
  const isDateSelected = isDatesEqual(date, selectedDate);
  const isNotCurrentMonth = date.getMonth() !== selectedMonth - 1;
  const isWeekend = displayWeekends && isDateAWeekend(date);
  const isHoliday = isDateAHoliday(date, holidays);
  const isStartRangeDate = isDatesEqual(date, startRange);
  const isEndRangeDate = isDatesEqual(date, endRange);
  const isBetweenRangeDates = isDateInRange(startRange, endRange, date);

  const rangeState = isStartRangeDate
    ? "start"
    : isEndRangeDate
    ? "end"
    : isBetweenRangeDates
    ? "between"
    : undefined;

  const onClick = useCallback(() => {
    onChange(date);
  }, [date, onChange]);

  return (
    <CalendarButton
      title={date.getDate()}
      rangeState={rangeState}
      isSelected={isDateSelected}
      isDisabled={isNotCurrentMonth}
      isWeekend={isWeekend}
      isHoliday={isHoliday}
      onClick={onClick}
    />
  );
});

export default CalendarDay;
