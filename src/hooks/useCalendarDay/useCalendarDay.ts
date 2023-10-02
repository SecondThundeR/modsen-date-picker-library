import { useCallback, useState } from "react";

import { CalendarDayProps } from "@/components/CalendarDay/interfaces";
import {
  extractDateState,
  getRangeState,
  isDateAHoliday,
  isDateAWeekend,
  isDateInEndRange,
  isDateInRange,
  isDateInStartRange,
} from "@/utils/calendar";
import { isDatesEqual } from "@/utils/date";

function useCalendarDay({
  date,
  selectedDate,
  selectedMonth,
  startDate,
  endDate,
  startRange,
  endRange,
  displayWeekends,
  isTodosEnabled,
  holidays,
  onChange,
}: CalendarDayProps) {
  const [isTodoVisible, setIsTodoVisible] = useState(false);
  const isDateSelected = isDatesEqual(date, selectedDate);
  const isNotCurrentMonth = date.getMonth() !== selectedMonth - 1;
  const isWeekend = displayWeekends && isDateAWeekend(date);
  const isHoliday = isDateAHoliday(date, holidays);
  const isStartRangeDate = isDatesEqual(date, startRange);
  const isEndRangeDate = isDatesEqual(date, endRange);
  const isBetweenRangeDates = isDateInRange(startRange, endRange, date);
  const rangeState = getRangeState(
    isStartRangeDate,
    isBetweenRangeDates,
    isEndRangeDate,
  );

  const onClick = useCallback(() => {
    if (
      !isDateInStartRange(startDate, extractDateState(date)) ||
      !isDateInEndRange(endDate, extractDateState(date))
    )
      return;
    onChange(date);
  }, [date, endDate, onChange, startDate]);

  const onDoubleClick = useCallback(() => {
    setIsTodoVisible(isTodosEnabled);
  }, [isTodosEnabled]);

  const onModalClose = useCallback(() => {
    setIsTodoVisible(false);
  }, []);

  return {
    isDateSelected,
    isNotCurrentMonth,
    isWeekend,
    isHoliday,
    rangeState,
    isTodoVisible,
    handlers: {
      onClick,
      onDoubleClick,
      onModalClose,
    },
  };
}

export default useCalendarDay;
