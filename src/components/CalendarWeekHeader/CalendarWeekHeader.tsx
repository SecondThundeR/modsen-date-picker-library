import React, { memo } from "react";

import { WEEKS_DATA } from "@/constants/weekData";

import CalendarButton from "../CalendarButton";
import { Wrapper } from "./CalendarWeekHeader.styled";

const CalendarWeekHeader = memo(function CalendarWeekHeader() {
  return (
    <Wrapper>
      {WEEKS_DATA.map(({ id, title }) => (
        <CalendarButton key={id} title={title} />
      ))}
    </Wrapper>
  );
});

export default CalendarWeekHeader;
