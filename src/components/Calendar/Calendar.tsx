import React, { memo, useCallback, useEffect, useMemo, useState } from "react";

import CalendarDaysGrid from "@/components/CalendarDaysGrid";
import CalendarHeader from "@/components/CalendarHeader";
import CalendarWeekHeader from "@/components/CalendarWeekHeader";
import CalendarWrapper from "@/components/CalendarWrapper";
import FooterButton from "@/components/FooterButton";
import {
  DateState,
  extractDateState,
  formatDateState,
  getCalendarData,
  getNextMonth,
  getPreviousMonth,
  isDateInEndRange,
  isDateInStartRange,
} from "@/utils/calendar";
import { getDefaultEndDate, getDefaultStartDate } from "@/utils/date";

import { Wrapper } from "./Calendar.styled";
import { CalendarProps } from "./interfaces";

const Calendar = memo(function Calendar({
  hasClearButton = false,
  date,
  startDate = getDefaultStartDate(),
  endDate = getDefaultEndDate(),
  isSundayFirst,
  onChange,
}: CalendarProps) {
  const [dateState, setDateState] = useState<DateState>(() =>
    extractDateState(date),
  );
  const calendarData = useMemo(
    () => getCalendarData(dateState.month, dateState.year),
    [dateState.month, dateState.year],
  );
  const headerTitle = formatDateState(dateState);

  useEffect(() => {
    setDateState(extractDateState(date));
  }, [date]);

  const onPrevClick = useCallback(() => {
    const { month, year } = dateState;
    const prevDate = getPreviousMonth(month, year);
    if (isDateInStartRange(startDate, prevDate)) setDateState(prevDate);
  }, [dateState, startDate]);

  const onNextClick = useCallback(() => {
    const { month, year } = dateState;
    const nextDate = getNextMonth(month, year);
    if (isDateInEndRange(endDate, nextDate)) setDateState(nextDate);
  }, [dateState, endDate]);

  return (
    <Wrapper>
      <CalendarWrapper removeBottomBorder={hasClearButton}>
        <CalendarHeader
          title={headerTitle}
          onPrevClick={onPrevClick}
          onNextClick={onNextClick}
        />
        <CalendarWeekHeader isSundayFirst={isSundayFirst} />
        <CalendarDaysGrid
          currentDate={date}
          datesArray={calendarData}
          currentMonth={dateState.month}
          onChange={onChange}
        />
      </CalendarWrapper>
      {hasClearButton && <FooterButton title="Clear" />}
    </Wrapper>
  );
});

export default Calendar;
