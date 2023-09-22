import React, { memo } from "react";

import { WEEKS_DATA } from "@/constants/weekData";

import { Title, TitleWrapper, Wrapper } from "./CalendarWeekHeader.styled";

const CalendarWeekHeader = memo(function CalendarWeekHeader() {
  return (
    <Wrapper>
      {WEEKS_DATA.map((item) => (
        <TitleWrapper key={item.id}>
          <Title>{item.title}</Title>
        </TitleWrapper>
      ))}
    </Wrapper>
  );
});

export default CalendarWeekHeader;
