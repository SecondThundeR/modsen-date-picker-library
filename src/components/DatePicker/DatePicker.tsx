import React, { memo, useCallback, useState } from "react";

import Calendar from "@/components/Calendar";
import DateInput from "@/components/DateInput";
import ErrorBoundary from "@/components/ErrorBoundary";
import { isEndRangeCorrect, isStartRangeCorrect } from "@/utils/calendar";
import { getDefaultEndDate, getDefaultStartDate } from "@/utils/date";

import { Wrapper } from "./DatePicker.styled";
import { DatePickerProps } from "./interfaces";

const DatePicker = memo(function DatePicker({
  title,
  type = "regular",
  startDate = getDefaultStartDate(),
  endDate = getDefaultEndDate(),
  startRange = null,
  isPickingStart = false,
  endRange = null,
  isPickingEnd = false,
  holidays = null,
  displayWeekends = false,
  isSundayFirst = true,
  isTodosEnabled = false,
  onChange,
}: DatePickerProps) {
  const [date, setDate] = useState<Date | null>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const onDateChange = useCallback(
    (changedDate: Date) => {
      if (
        type === "regular" &&
        changedDate.getDate() === date?.getDate() &&
        changedDate.getMonth() === date?.getMonth()
      )
        return;
      if (type === "month" && changedDate.getMonth() === date?.getMonth())
        return;
      if (type === "year" && changedDate.getFullYear() === date?.getFullYear())
        return;
      if (
        isPickingStart &&
        endRange &&
        !isStartRangeCorrect(endRange, changedDate)
      )
        return;
      if (
        isPickingEnd &&
        startRange &&
        !isEndRangeCorrect(startRange, changedDate)
      )
        return;

      setDate(changedDate);
      onChange?.(changedDate);
    },
    [date, endRange, isPickingEnd, isPickingStart, onChange, startRange, type],
  );

  const onClearClick = useCallback(() => {
    setDate(null);
    onChange?.(null);
  }, [onChange]);

  const toggleCalendar = useCallback(() => {
    setShowCalendar((prev) => !prev);
  }, []);

  return (
    <ErrorBoundary>
      <Wrapper>
        <DateInput
          title={title}
          type={type}
          dateString={date?.toLocaleDateString("en-GB") ?? ""}
          startDate={startDate}
          endDate={endDate}
          onCalendarClick={toggleCalendar}
          onDateChange={onDateChange}
          onClearClick={onClearClick}
        />
        {showCalendar && (
          <Calendar
            date={date ?? new Date()}
            type={type}
            startDate={startDate}
            endDate={endDate}
            startRange={startRange}
            endRange={endRange}
            isSundayFirst={isSundayFirst}
            displayWeekends={displayWeekends}
            isTodosEnabled={isTodosEnabled}
            holidays={holidays}
            onChange={onDateChange}
          />
        )}
      </Wrapper>
    </ErrorBoundary>
  );
});

export default DatePicker;
