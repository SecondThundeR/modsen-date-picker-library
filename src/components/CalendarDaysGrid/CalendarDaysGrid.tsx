import React, { memo, useMemo } from "react";

import CalendarDay from "@/components/CalendarDay";

import { Grid } from "./CalendarDaysGrid.styled";
import { CalendarDaysGridProps } from "./interfaces";

const CalendarDaysGrid = memo(function CalendarDaysGrid({
  currentDate,
  currentMonth,
  datesArray,
  startRange,
  endRange,
  displayWeekends,
  holidays,
  onChange,
}: CalendarDaysGridProps) {
  const monthDatesArray = useMemo(
    () => datesArray.map((date) => new Date(date.join("/"))),
    [datesArray],
  );

  const getDayKey = (date: Date) => {
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  };

  return (
    <Grid>
      {monthDatesArray.map((date) => {
        const dayKey = getDayKey(date);
        return (
          <CalendarDay
            key={dayKey}
            date={date}
            startRange={startRange}
            endRange={endRange}
            selectedMonth={currentMonth}
            selectedDate={currentDate}
            displayWeekends={displayWeekends}
            holidays={holidays}
            onChange={onChange}
          />
        );
      })}
    </Grid>
  );
});

export default CalendarDaysGrid;
