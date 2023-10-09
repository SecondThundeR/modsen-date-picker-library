import { useCallback } from "react";

import { CalendarMonthsButtonProps } from "@/components/CalendarMonthsButton/interfaces";
import {
  extractDateState,
  getRangeState,
  isDateInEndRange,
  isDateInRange,
  isDateInStartRange,
} from "@/utils/calendar";
import { getMonthDateToUpdate, isDatesMonthsEqual } from "@/utils/date";

function useCalendarMonth({
  date,
  selectedDate,
  startDate,
  endDate,
  startRange,
  endRange,
  onChange,
}: Omit<CalendarMonthsButtonProps, "title">) {
  const isMonthSelected = isDatesMonthsEqual(date, selectedDate);
  const isStartRangeMonth = isDatesMonthsEqual(date, startRange);
  const isEndRangeMonth = isDatesMonthsEqual(date, endRange);
  const isBetweenRangeDates = isDateInRange(startRange, endRange, date);
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
