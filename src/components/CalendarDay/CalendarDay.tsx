import React, { memo, useCallback } from "react";

import CalendarButton from "@/components/CalendarButton";
import { isDatesEqual } from "@/utils/date";

import { CalendarDayProps } from "./interfaces";

const CalendarDay = memo(function CalendarDay({
  date,
  selectedDate,
  selectedMonth,
  onChange,
}: CalendarDayProps) {
  const isDateSelected = isDatesEqual(date, selectedDate);
  const isNotCurrentMonth = date.getMonth() !== selectedMonth - 1;

  const onClick = useCallback(() => {
    onChange(date);
  }, [date, onChange]);

  return (
    <CalendarButton
      title={date.getDate()}
      isSelected={isDateSelected}
      isDisabled={isNotCurrentMonth}
      onClick={onClick}
    />
  );
});

export default CalendarDay;
