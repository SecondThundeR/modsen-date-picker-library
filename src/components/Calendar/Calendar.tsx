import React, { memo, useCallback } from "react";

import CalendarHeader from "@/components/CalendarHeader";
import CalendarMonths from "@/components/CalendarMonths";
import CalendarRegular from "@/components/CalendarRegular";
import CalendarWrapper from "@/components/CalendarWrapper";
import CalendarYears from "@/components/CalendarYears";
import FooterButton from "@/components/FooterButton";
import { useCalendarNavigation, useCalendarType } from "@/hooks";
import { getFormattedDateState } from "@/utils/calendar";

import { Wrapper } from "./Calendar.styled";
import { CalendarProps } from "./interfaces";

const Calendar = memo(function Calendar({
  date,
  startDate,
  endDate,
  startRange,
  endRange,
  displayWeekends,
  isSundayFirst,
  holidays,
  isTodosEnabled,
  hasClearButton = false,
  onChange,
}: CalendarProps) {
  const {
    type,
    handlers: { onTitle, onDateChange },
  } = useCalendarType({ onChange });
  const {
    dateState,
    handlers: { onPrevClick, onNextClick },
  } = useCalendarNavigation({
    date,
    startDate,
    endDate,
    type,
  });
  const headerTitle = getFormattedDateState(type, dateState);

  const currentCalendarView = useCallback(() => {
    switch (type) {
      case "regular":
        return (
          <CalendarRegular
            date={date}
            dateState={dateState}
            startDate={startDate}
            endDate={endDate}
            startRange={startRange}
            endRange={endRange}
            displayWeekends={displayWeekends}
            isTodosEnabled={isTodosEnabled}
            holidays={holidays}
            isSundayFirst={isSundayFirst}
            onChange={onDateChange}
          />
        );
      case "month":
        return (
          <CalendarMonths
            date={date}
            dateState={dateState}
            startDate={startDate}
            endDate={endDate}
            startRange={startRange}
            endRange={endRange}
            onChange={onDateChange}
          />
        );
      case "year":
        return (
          <CalendarYears
            date={date}
            dateState={dateState}
            startDate={startDate}
            endDate={endDate}
            startRange={startRange}
            endRange={endRange}
            onChange={onDateChange}
          />
        );
    }
  }, [
    date,
    dateState,
    displayWeekends,
    endDate,
    endRange,
    holidays,
    isSundayFirst,
    isTodosEnabled,
    onDateChange,
    startDate,
    startRange,
    type,
  ]);

  return (
    <Wrapper data-testid="calendar">
      <CalendarWrapper removeBottomBorder={hasClearButton}>
        <CalendarHeader
          title={headerTitle}
          onTitle={onTitle}
          onPrevClick={onPrevClick}
          onNextClick={onNextClick}
        />
        {currentCalendarView()}
      </CalendarWrapper>
      {hasClearButton && <FooterButton title="Clear" />}
    </Wrapper>
  );
});

export default Calendar;
