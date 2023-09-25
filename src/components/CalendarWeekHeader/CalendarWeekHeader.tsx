import React, { memo, useMemo } from "react";

import { WEEKS_DATA } from "@/constants/weekData";

import CalendarButton from "../CalendarButton";
import { Wrapper } from "./CalendarWeekHeader.styled";
import { CalendarWeekHeaderProps } from "./interfaces";

const CalendarWeekHeader = memo(function CalendarWeekHeader({
  isSundayFirst = true,
}: CalendarWeekHeaderProps) {
  const weeksArray = useMemo(() => {
    return isSundayFirst ? WEEKS_DATA : [...WEEKS_DATA.slice(1), WEEKS_DATA[0]];
  }, [isSundayFirst]);

  return (
    <Wrapper>
      {weeksArray.map(({ id, title }) => (
        <CalendarButton key={id} title={title} />
      ))}
    </Wrapper>
  );
});

export default CalendarWeekHeader;
