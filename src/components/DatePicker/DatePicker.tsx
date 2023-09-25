import React, { memo, useCallback, useState } from "react";

import Calendar from "@/components/Calendar";
import Input from "@/components/Input";
import { getDefaultEndDate, getDefaultStartDate } from "@/utils/date";

import { Wrapper } from "./DatePicker.styled";
import { DatePickerProps } from "./interfaces";

const DatePicker = memo(function DatePicker({
  startDate = getDefaultStartDate(),
  endDate = getDefaultEndDate(),
}: DatePickerProps) {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const onDateChange = useCallback(
    (changedDate: Date) => {
      if (changedDate.getTime() === date.getTime()) return;
      setDate(changedDate);
    },
    [date],
  );

  const onClearClick = useCallback(() => {
    setDate(new Date());
  }, []);

  const toggleCalendar = useCallback(() => {
    setShowCalendar((prev) => !prev);
  }, []);

  return (
    <Wrapper>
      <Input
        dateString={date.toLocaleDateString("en-GB")}
        startDate={startDate}
        endDate={endDate}
        onCalendarClick={toggleCalendar}
        onDateChange={onDateChange}
        onClearClick={onClearClick}
      />
      {showCalendar && (
        <Calendar
          date={date}
          startDate={startDate}
          endDate={endDate}
          onChange={onDateChange}
        />
      )}
    </Wrapper>
  );
});

export default DatePicker;