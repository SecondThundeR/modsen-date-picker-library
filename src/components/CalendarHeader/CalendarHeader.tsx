import React, { memo } from "react";

import NextIcon from "@/assets/NextIcon";
import PrevIcon from "@/assets/PrevIcon";

import { Header, HeaderTitle } from "./CalendarHeader.styled";
import { CalendarHeaderProps } from "./interfaces";

const CalendarHeader = memo(function CalendarHeader({
  title,
}: CalendarHeaderProps) {
  return (
    <Header>
      <PrevIcon />
      <HeaderTitle>{title}</HeaderTitle>
      <NextIcon />
    </Header>
  );
});

export default CalendarHeader;
