import React, { memo, useCallback } from "react";

import CalendarButton from "@/components/CalendarButton";
import { isDateAHoliday, isDateAWeekend } from "@/utils/calendar";
import { isDatesEqual } from "@/utils/date";

import { CalendarDayProps } from "./interfaces";

const CalendarDay = memo(function CalendarDay({
  date,
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

  const onClick = useCallback(() => {
    onChange(date);
  }, [date, onChange]);

  return (
    <CalendarButton
      title={date.getDate()}
      isSelected={isDateSelected}
      isDisabled={isNotCurrentMonth}
      isWeekend={isWeekend}
      isHoliday={isHoliday}
      onClick={onClick}
    />
  );
});

export default CalendarDay;
