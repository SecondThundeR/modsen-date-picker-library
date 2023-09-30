import React, { memo, useMemo } from "react";

import CalendarDaysGrid from "@/components/CalendarDaysGrid";
import CalendarWeekHeader from "@/components/CalendarWeekHeader";
import { getCalendarData } from "@/utils/calendar";

import { CalendarRegularProps } from "./interfaces";

const CalendarRegular = memo(function CalendarRegular({
  date,
  dateState,
  startDate,
  endDate,
  startRange,
  endRange,
  holidays,
  isSundayFirst,
  displayWeekends,
  isTodosEnabled,
  onChange,
}: CalendarRegularProps) {
  const calendarData = useMemo(
    () => getCalendarData(dateState.month, dateState.year, isSundayFirst),
    [dateState.month, dateState.year, isSundayFirst],
  );

  return (
    <>
      <CalendarWeekHeader isSundayFirst={isSundayFirst} />
      <CalendarDaysGrid
        currentDate={date}
        startDate={startDate}
        endDate={endDate}
        datesArray={calendarData}
        startRange={startRange}
        endRange={endRange}
        currentMonth={dateState.month}
        displayWeekends={displayWeekends}
        isTodosEnabled={isTodosEnabled}
        holidays={holidays}
        onChange={onChange}
      />
    </>
  );
});

export default CalendarRegular;
