import { useCallback } from "react";

import { CalendarYearsButtonProps } from "@/components/CalendarYearsButton/interfaces";
import {
  getRangeState,
  getYearDateToUpdate,
  isDateInEndRange,
  isDateInRange,
  isDateInStartRange,
} from "@/utils/calendar";
import { extractDateState, isYearsEqual } from "@/utils/date";

function useCalendarYear({
  date,
  selectedDate,
  startDate,
  endDate,
  startRange,
  endRange,
  onChange,
}: Omit<CalendarYearsButtonProps, "title">) {
  const isYearSelected = isYearsEqual(date, selectedDate);
  const isStartRangeYear = isYearsEqual(date, startRange);
  const isEndRangeYear = isYearsEqual(date, endRange);
  const isBetweenRangeDates = isDateInRange(date, startRange, endRange);
  const isNotInRange = !isDateInRange(date, startDate, endDate);
  const rangeState = getRangeState(
    isStartRangeYear,
    isBetweenRangeDates,
    isEndRangeYear,
  );

  const onClick = useCallback(() => {
    const newDate = getYearDateToUpdate(date, selectedDate);
    if (
      !isDateInStartRange(startDate, extractDateState(newDate)) ||
      !isDateInEndRange(endDate, extractDateState(newDate))
    )
      return;
    onChange(newDate);
  }, [date, endDate, onChange, selectedDate, startDate]);

  return {
    isYearSelected,
    isNotInRange,
    rangeState,
    handlers: { onClick },
  };
}

export default useCalendarYear;
