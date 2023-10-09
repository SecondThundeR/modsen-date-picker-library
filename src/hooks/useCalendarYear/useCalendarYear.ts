import { useCallback } from "react";

import { CalendarYearsButtonProps } from "@/components/CalendarYearsButton/interfaces";
import {
  extractDateState,
  getRangeState,
  isDateInEndRange,
  isDateInRange,
  isDateInStartRange,
} from "@/utils/calendar";
import {
  getYearDateToUpdate,
  isDatesYearsEqual,
  isInRange,
} from "@/utils/date";

function useCalendarYear({
  date,
  selectedDate,
  startDate,
  endDate,
  startRange,
  endRange,
  onChange,
}: Omit<CalendarYearsButtonProps, "title">) {
  const isYearSelected = isDatesYearsEqual(date, selectedDate);
  const isStartRangeYear = isDatesYearsEqual(date, startRange);
  const isEndRangeYear = isDatesYearsEqual(date, endRange);
  const isBetweenRangeDates = isDateInRange(startRange, endRange, date);
  const isNotInRange = !isInRange(date, startDate, endDate);
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
