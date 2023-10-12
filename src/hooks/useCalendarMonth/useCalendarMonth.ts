import { useCallback } from "react";

import { CalendarMonthsButtonProps } from "@/components/CalendarMonthsButton/interfaces";
import {
  getMonthDateToUpdate,
  getRangeState,
  isDateInEndRange,
  isDateInRange,
  isDateInStartRange,
} from "@/utils/calendar";
import { extractDateState, isMonthsEqual } from "@/utils/date";

function useCalendarMonth({
  date,
  selectedDate,
  startDate,
  endDate,
  startRange,
  endRange,
  onChange,
}: Omit<CalendarMonthsButtonProps, "title">) {
  const isMonthSelected = isMonthsEqual(date, selectedDate);
  const isStartRangeMonth = isMonthsEqual(date, startRange);
  const isEndRangeMonth = isMonthsEqual(date, endRange);
  const isBetweenRangeDates = isDateInRange(date, startRange, endRange);
  const rangeState = getRangeState(
    isStartRangeMonth,
    isBetweenRangeDates,
    isEndRangeMonth,
  );

  const onClick = useCallback(() => {
    const newDate = getMonthDateToUpdate(date, selectedDate);
    if (
      !isDateInStartRange(startDate, extractDateState(newDate)) ||
      !isDateInEndRange(endDate, extractDateState(newDate))
    )
      return;
    onChange(newDate);
  }, [date, endDate, onChange, selectedDate, startDate]);

  return {
    isMonthSelected,
    rangeState,
    handlers: { onClick },
  };
}

export default useCalendarMonth;
