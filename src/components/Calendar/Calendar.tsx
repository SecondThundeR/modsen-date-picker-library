import React, { memo, useCallback, useEffect, useState } from "react";

import CalendarHeader from "@/components/CalendarHeader";
import CalendarRegular from "@/components/CalendarRegular";
import CalendarWrapper from "@/components/CalendarWrapper";
import FooterButton from "@/components/FooterButton";
import {
  DateState,
  extractDateState,
  formatDateState,
  getNextMonth,
  getPreviousMonth,
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
    const prevDate = getPreviousMonth(month, year);
    if (isDateInStartRange(startDate, prevDate)) setDateState(prevDate);
  }, [dateState, startDate]);

  const onNextClick = useCallback(() => {
    const { month, year } = dateState;
    const nextDate = getNextMonth(month, year);
    if (isDateInEndRange(endDate, nextDate)) setDateState(nextDate);
  }, [dateState, endDate]);

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
      </CalendarWrapper>
      {hasClearButton && <FooterButton title="Clear" />}
    </Wrapper>
  );
});

export default Calendar;
