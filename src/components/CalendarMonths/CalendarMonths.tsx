import React, { memo, useMemo } from "react";

import { DEFAULT_DAY } from "@/constants/date";
import { getCalendarMonthsData } from "@/utils/calendar";

import CalendarMonthsButton from "../CalendarMonthsButton";
import { Grid } from "./CalendarMonths.styled";
import { CalendarMonthsProps } from "./interfaces";

const CalendarMonths = memo(function CalendarMonths({
  date,
  dateState,
  startDate,
  endDate,
  startRange,
  endRange,
  onChange,
}: CalendarMonthsProps) {
  const calendarMonthsData = useMemo(
    () => getCalendarMonthsData(dateState.year),
    [dateState.year],
  );

  const monthsArray = useMemo(
    () =>
      calendarMonthsData.map((date) => {
        const [year, monthNum, monthTitle] = date;
        return {
          monthDate: new Date(`${year}/${monthNum}/${DEFAULT_DAY}`),
          title: String(monthTitle),
        };
      }),
    [calendarMonthsData],
  );

  return (
    <Grid>
      {monthsArray.map((monthData) => {
        const { monthDate, title } = monthData;
        const key = `${monthDate.getMonth()}-${title}`;
        return (
          <CalendarMonthsButton
            key={key}
            title={title}
            date={monthDate}
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

export default CalendarMonths;
