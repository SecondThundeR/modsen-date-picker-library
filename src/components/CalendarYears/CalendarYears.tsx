import React, { memo, useMemo } from "react";

import CalendarYearsButton from "@/components/CalendarYearsButton";
import { DEFAULT_DAY, DEFAULT_MONTH } from "@/constants/date";
import { getCalendarYearsData } from "@/utils/calendar";

import { Grid } from "./CalendarYears.styled";
import { CalendarYearsProps } from "./interfaces";

const CalendarYears = memo(function CalendarYears({
  date,
  dateState,
  startDate,
  endDate,
  startRange,
  endRange,
  onChange,
}: CalendarYearsProps) {
  const calendarYearsData = useMemo(
    () => getCalendarYearsData(dateState.year),
    [dateState.year],
  );

  const yearsArray = useMemo(
    () =>
      calendarYearsData.map((year) => {
        return {
          yearDate: new Date(`${year}/${DEFAULT_MONTH}/${DEFAULT_DAY}`),
          title: String(year),
        };
      }),
    [calendarYearsData],
  );

  return (
    <Grid>
      {yearsArray.map((yearData) => {
        const { yearDate, title } = yearData;
        return (
          <CalendarYearsButton
            key={title}
            title={title}
            date={yearDate}
            selectedDate={date}
            startDate={startDate}
            endDate={endDate}
            startRange={startRange}
            endRange={endRange}
            onChange={onChange}
          />
        );
      })}
    </Grid>
  );
});

export default CalendarYears;
