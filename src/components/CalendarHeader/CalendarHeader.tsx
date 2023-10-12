import React, { memo } from "react";

import NextIcon from "@/components/NextIcon";
import PrevIcon from "@/components/PrevIcon";

import { Header, HeaderTitle } from "./CalendarHeader.styled";
import { CalendarHeaderProps } from "./interfaces";

const CalendarHeader = memo(function CalendarHeader({
  title,
  onTitle,
  onPrevClick,
  onNextClick,
}: CalendarHeaderProps) {
  return (
    <Header data-testid="header">
      <PrevIcon data-testid="prev-button" onClick={onPrevClick} />
      <HeaderTitle data-testid="calendar-title" onClick={onTitle}>
        {title}
      </HeaderTitle>
      <NextIcon data-testid="next-button" onClick={onNextClick} />
    </Header>
  );
});

export default CalendarHeader;
