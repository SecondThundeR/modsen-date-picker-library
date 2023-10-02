import { useCallback, useEffect, useState } from "react";

import {
  DateState,
  extractDateState,
  getNextDecade,
  getNextMonth,
  getNextYear,
  getPreviousDecade,
  getPreviousMonth,
  getPreviousYear,
  isDateInEndRange,
  isDateInStartRange,
} from "@/utils/calendar";

import { UseCalendarNavigationOptions } from "./interfaces";

function useCalendarNavigation({
  date,
  startDate,
  endDate,
  type,
}: UseCalendarNavigationOptions) {
  const [dateState, setDateState] = useState<DateState>(() =>
    extractDateState(date),
  );

  useEffect(() => {
    setDateState(() => extractDateState(date));
  }, [date]);

  const onPrevClick = useCallback(() => {
    const { month, year } = dateState;
    const prevDate =
      type === "regular"
        ? getPreviousMonth(month, year)
        : type === "month"
        ? getPreviousYear(month, year)
        : getPreviousDecade(year);
    if (isDateInStartRange(startDate, prevDate)) setDateState(prevDate);
  }, [dateState, startDate, type]);

  const onNextClick = useCallback(() => {
    const { month, year } = dateState;
    const nextDate =
      type === "regular"
        ? getNextMonth(month, year)
        : type === "month"
        ? getNextYear(month, year)
        : getNextDecade(year);
    if (isDateInEndRange(endDate, nextDate)) setDateState(nextDate);
  }, [dateState, endDate, type]);

  return {
    dateState,
    handlers: {
      onPrevClick,
      onNextClick,
    },
  };
}

export default useCalendarNavigation;
