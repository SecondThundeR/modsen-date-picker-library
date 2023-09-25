import React, { memo, useMemo } from "react";

import CalendarDay from "@/components/CalendarDay";

import { Grid } from "./CalendarDaysGrid.styled";
import { CalendarDaysGridProps } from "./interfaces";

const CalendarDaysGrid = memo(function CalendarDaysGrid({
  currentDate,
  currentMonth,
  datesArray,
  onChange,
}: CalendarDaysGridProps) {
  const monthDatesArray = useMemo(
    () => datesArray.map((date) => new Date(date.join("/"))),
    [datesArray],
  );

  return (
    <Grid>
      {monthDatesArray.map((date) => (
        <CalendarDay
          key={String(date.getTime())}
          date={date}
          selectedMonth={currentMonth}
          selectedDate={currentDate}
          onChange={onChange}
        />
      ))}
    </Grid>
  );
});

export default CalendarDaysGrid;
