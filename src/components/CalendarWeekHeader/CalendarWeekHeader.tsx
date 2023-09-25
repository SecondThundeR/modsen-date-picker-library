import React, { memo, useMemo } from "react";

import CalendarButton from "@/components/CalendarButton";
import { WEEK_DAYS } from "@/constants/date";

import { Wrapper } from "./CalendarWeekHeader.styled";
import { CalendarWeekHeaderProps } from "./interfaces";

const CalendarWeekHeader = memo(function CalendarWeekHeader({
  isSundayFirst = true,
}: CalendarWeekHeaderProps) {
  const weeksArray = useMemo(() => {
    const weekDays = Object.values(WEEK_DAYS);
    return isSundayFirst ? weekDays : [...weekDays.slice(1), weekDays[0]];
  }, [isSundayFirst]);

  return (
    <Wrapper>
      {weeksArray.map((day) => (
        <CalendarButton key={day} title={day} />
      ))}
    </Wrapper>
  );
});

export default CalendarWeekHeader;
