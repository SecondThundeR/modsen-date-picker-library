import React, { memo } from "react";

import Calendar from "@/components/Calendar";
import DateInput from "@/components/DateInput";
import ErrorBoundary from "@/components/ErrorBoundary";
import useDatePicker from "@/hooks/useDatePicker";
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
  const {
    date,
    showCalendar,
    handlers: { toggleCalendar, onDateChange, onClearClick },
  } = useDatePicker({
    type,
    startRange,
    isPickingStart,
    endRange,
    isPickingEnd,
    onChange,
  });

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
