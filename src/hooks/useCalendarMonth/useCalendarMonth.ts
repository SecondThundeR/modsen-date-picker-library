import { useCallback } from "react";

import { CalendarMonthsButtonProps } from "@/components/CalendarMonthsButton/interfaces";
import {
  extractDateState,
  getRangeState,
  isDateInEndRange,
  isDateInRange,
  isDateInStartRange,
} from "@/utils/calendar";
import { isDatesMonthsEqual } from "@/utils/date";

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
    if (
      !isDateInStartRange(startDate, extractDateState(date)) ||
      !isDateInEndRange(endDate, extractDateState(date))
    )
      return;
    onChange(date);
  }, [date, endDate, onChange, startDate]);

  return {
    isMonthSelected,
    rangeState,
    handlers: { onClick },
  };
}

export default useCalendarMonth;
