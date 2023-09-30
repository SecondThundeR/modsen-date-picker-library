import React, { memo, useCallback, useState } from "react";

import CalendarButton from "@/components/CalendarButton";
import CalendarTodo from "@/components/CalendarTodoList";
import {
  extractDateState,
  isDateAHoliday,
  isDateAWeekend,
  isDateInEndRange,
  isDateInRange,
  isDateInStartRange,
} from "@/utils/calendar";
import { isDatesEqual } from "@/utils/date";

import { CalendarDayProps } from "./interfaces";

const CalendarDay = memo(function CalendarDay({
  date,
  startDate,
  endDate,
  startRange,
  endRange,
  selectedDate,
  selectedMonth,
  displayWeekends,
  holidays,
  isTodosEnabled,
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

  const rangeState = isStartRangeDate
    ? "start"
    : isEndRangeDate
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

  const onModalClose = useCallback(() => {
    setIsTodoVisible(false);
  }, []);

  const onDoubleClick = useCallback(() => {
    setIsTodoVisible(true);
  }, []);

  return (
    <>
      <CalendarButton
        title={date.getDate()}
        rangeState={rangeState}
        isSelected={isDateSelected}
        isDisabled={isNotCurrentMonth}
        isWeekend={isWeekend}
        isHoliday={isHoliday}
        onClick={onClick}
        onDoubleClick={isTodosEnabled ? onDoubleClick : undefined}
      />
      {isTodoVisible && (
        <CalendarTodo todoDate={date} closeModal={onModalClose} />
      )}
    </>
  );
});

export default CalendarDay;
