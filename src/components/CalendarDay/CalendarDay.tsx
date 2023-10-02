import React, { memo } from "react";

import CalendarButton from "@/components/CalendarButton";
import CalendarTodo from "@/components/CalendarTodoList";
import { useCalendarDay } from "@/hooks";

import { CalendarDayProps } from "./interfaces";

const CalendarDay = memo(function CalendarDay({
  date,
  ...props
}: CalendarDayProps) {
  const {
    isDateSelected,
    isHoliday,
    isNotCurrentMonth,
    isWeekend,
    rangeState,
    isTodoVisible,
    handlers: { onClick, onDoubleClick, onModalClose },
  } = useCalendarDay({ date, ...props });

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
        onDoubleClick={onDoubleClick}
      />
      {isTodoVisible && (
        <CalendarTodo todoDate={date} closeModal={onModalClose} />
      )}
    </>
  );
});

export default CalendarDay;
