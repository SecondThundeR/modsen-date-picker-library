import React, { memo } from "react";

import CalendarButton from "../CalendarButton";
import { Grid } from "./CalendarDaysGrid.styled";
import { CalendarDaysGridProps } from "./interfaces";

const CalendarDaysGrid = memo(function CalendarDaysGrid({
  days,
}: CalendarDaysGridProps) {
  return (
    <Grid>
      {days.map((day) => (
        <CalendarButton key={day} title={day} />
      ))}
    </Grid>
  );
});

export default CalendarDaysGrid;
