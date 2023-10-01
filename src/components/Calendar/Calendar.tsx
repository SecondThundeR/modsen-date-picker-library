import React, { memo } from "react";

import CalendarHeader from "@/components/CalendarHeader";
import CalendarMonths from "@/components/CalendarMonths";
import CalendarRegular from "@/components/CalendarRegular";
import CalendarWrapper from "@/components/CalendarWrapper";
import CalendarYears from "@/components/CalendarYears";
import FooterButton from "@/components/FooterButton";
import useCalendarNavigaton from "@/hooks/useCalendarNavigation";
import { formatDateState } from "@/utils/calendar";

import { Wrapper } from "./Calendar.styled";
import { CalendarProps } from "./interfaces";

const Calendar = memo(function Calendar({
  date,
  type = "regular",
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
    dateState,
    handlers: { onPrevClick, onNextClick },
  } = useCalendarNavigaton({
    date,
    startDate,
    endDate,
    type,
  });
  const headerTitle = formatDateState(type, dateState);

  return (
    <Wrapper data-testid="calendar">
      <CalendarWrapper removeBottomBorder={hasClearButton}>
        <CalendarHeader
          title={headerTitle}
          onPrevClick={onPrevClick}
          onNextClick={onNextClick}
        />
        {type === "regular" && (
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
            onChange={onChange}
          />
        )}
        {type === "month" && (
          <CalendarMonths
            date={date}
            dateState={dateState}
            startDate={startDate}
            endDate={endDate}
            startRange={startRange}
            endRange={endRange}
            onChange={onChange}
          />
        )}
        {type === "year" && (
          <CalendarYears
            date={date}
            dateState={dateState}
            startDate={startDate}
            endDate={endDate}
            startRange={startRange}
            endRange={endRange}
            onChange={onChange}
          />
        )}
      </CalendarWrapper>
      {hasClearButton && <FooterButton title="Clear" />}
    </Wrapper>
  );
});

export default Calendar;
