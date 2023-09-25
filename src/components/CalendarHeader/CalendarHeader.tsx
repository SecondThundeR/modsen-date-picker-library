import React, { memo } from "react";

import NextIcon from "@/assets/NextIcon";
import PrevIcon from "@/assets/PrevIcon";

import { Header, HeaderTitle } from "./CalendarHeader.styled";
import { CalendarHeaderProps } from "./interfaces";

const CalendarHeader = memo(function CalendarHeader({
  title,
  onPrevClick,
  onNextClick,
}: CalendarHeaderProps) {
  return (
    <Header data-testid="header">
      <PrevIcon data-testid="prev-button" onClick={onPrevClick} />
      <HeaderTitle>{title}</HeaderTitle>
      <NextIcon data-testid="next-button" onClick={onNextClick} />
    </Header>
  );
});

export default CalendarHeader;
