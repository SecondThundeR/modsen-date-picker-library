import React, { memo, useCallback } from "react";

import CalendarButton from "@/components/CalendarButton";
import { isDateAWeekday } from "@/utils/calendar";
import { isDatesEqual } from "@/utils/date";

import { CalendarDayProps } from "./interfaces";

const CalendarDay = memo(function CalendarDay({
  date,
  selectedDate,
  selectedMonth,
  displayWeekends,
  onChange,
}: CalendarDayProps) {
  const isDateSelected = isDatesEqual(date, selectedDate);
  const isNotCurrentMonth = date.getMonth() !== selectedMonth - 1;
  const isWeekday = displayWeekends && isDateAWeekday(date);

  const onClick = useCallback(() => {
    onChange(date);
  }, [date, onChange]);

  return (
    <CalendarButton
      title={date.getDate()}
      isSelected={isDateSelected}
      isDisabled={isNotCurrentMonth}
      isWeekday={isWeekday}
      onClick={onClick}
    />
  );
});

export default CalendarDay;
