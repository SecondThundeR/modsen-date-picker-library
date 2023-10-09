import React, { memo } from "react";

import Calendar from "@/components/Calendar";
import DateInput from "@/components/DateInput";
import ErrorBoundary from "@/components/ErrorBoundary";
import { withHolidays, withHolidaysAPI } from "@/hocs";
import { useDatePicker } from "@/hooks";
import { getDefaultEndDate, getDefaultStartDate } from "@/utils/date";

import { Wrapper } from "./DatePicker.styled";
import { DatePickerProps } from "./interfaces";

const DatePicker = memo(function DatePicker({
  title,
  startDate = getDefaultStartDate(),
  endDate = getDefaultEndDate(),
  startRange = null,
  isPickingStart = false,
  endRange = null,
  isPickingEnd = false,
  holidays = null,
  holidayCountry,
  holidayYear,
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
    startRange,
    isPickingStart,
    endRange,
    isPickingEnd,
    onChange,
  });

  const WrapperCalendar =
    holidays !== null
      ? withHolidays(Calendar, {
          holidays,
        })
      : withHolidaysAPI(Calendar, {
          holidayCountry,
          year: holidayYear,
        });

  return (
    <ErrorBoundary>
      <Wrapper>
        <DateInput
          title={title}
          dateString={date?.toLocaleDateString("en-GB") ?? ""}
          startDate={startDate}
          endDate={endDate}
          onCalendarClick={toggleCalendar}
          onDateChange={onDateChange}
          onClearClick={onClearClick}
        />
        {showCalendar && (
          <WrapperCalendar
            date={date ?? new Date()}
            startDate={startDate}
            endDate={endDate}
            startRange={startRange}
            endRange={endRange}
            isSundayFirst={isSundayFirst}
            displayWeekends={displayWeekends}
            isTodosEnabled={isTodosEnabled}
            onChange={onDateChange}
          />
        )}
      </Wrapper>
    </ErrorBoundary>
  );
});

export default DatePicker;
