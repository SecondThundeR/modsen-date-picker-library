import React, { memo, useCallback, useEffect, useState } from "react";

import CalendarHeader from "@/components/CalendarHeader";
import CalendarMonths from "@/components/CalendarMonths";
import CalendarRegular from "@/components/CalendarRegular";
import CalendarWrapper from "@/components/CalendarWrapper";
import CalendarYears from "@/components/CalendarYears";
import FooterButton from "@/components/FooterButton";
import {
  DateState,
  extractDateState,
  formatDateState,
  getNextDecade,
  getNextMonth,
  getNextYear,
  getPreviousDecade,
  getPreviousMonth,
  getPreviousYear,
  isDateInEndRange,
  isDateInStartRange,
} from "@/utils/calendar";

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
  const [dateState, setDateState] = useState<DateState>(() =>
    extractDateState(date),
  );
  const headerTitle = formatDateState(type, dateState);

  useEffect(() => {
    setDateState(extractDateState(date));
  }, [date]);

  const onPrevClick = useCallback(() => {
    const { month, year } = dateState;
    const prevDate =
      type === "regular"
        ? getPreviousMonth(month, year)
        : type === "month"
        ? getPreviousYear(month, year)
        : getPreviousDecade(year);
    if (isDateInStartRange(startDate, prevDate)) setDateState(prevDate);
  }, [dateState, startDate, type]);

  const onNextClick = useCallback(() => {
    const { month, year } = dateState;
    const nextDate =
      type === "regular"
        ? getNextMonth(month, year)
        : type === "month"
        ? getNextYear(month, year)
        : getNextDecade(year);
    if (isDateInEndRange(endDate, nextDate)) setDateState(nextDate);
  }, [dateState, endDate, type]);

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
