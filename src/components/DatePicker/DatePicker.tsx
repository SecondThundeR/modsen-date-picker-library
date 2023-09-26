import React, { memo, useCallback, useState } from "react";

import Calendar from "@/components/Calendar";
import ErrorBoundary from "@/components/ErrorBoundary";
import Input from "@/components/Input";
import { getDefaultEndDate, getDefaultStartDate } from "@/utils/date";

import { Wrapper } from "./DatePicker.styled";
import { DatePickerProps } from "./interfaces";

const DatePicker = memo(function DatePicker({
  startDate = getDefaultStartDate(),
  endDate = getDefaultEndDate(),
  holidays = null,
  isSundayFirst = true,
  displayWeekends = true,
}: DatePickerProps) {
  const [date, setDate] = useState<Date | null>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const onDateChange = useCallback(
    (changedDate: Date) => {
      if (changedDate.getTime() === date?.getTime()) return;
      setDate(changedDate);
    },
    [date],
  );

  const onClearClick = useCallback(() => {
    setDate(null);
  }, []);

  const toggleCalendar = useCallback(() => {
    setShowCalendar((prev) => !prev);
  }, []);

  return (
    <ErrorBoundary>
      <Wrapper>
        <Input
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
            startDate={startDate}
            endDate={endDate}
            isSundayFirst={isSundayFirst}
            displayWeekends={displayWeekends}
            holidays={holidays}
            onChange={onDateChange}
          />
        )}
      </Wrapper>
    </ErrorBoundary>
  );
});

export default DatePicker;
