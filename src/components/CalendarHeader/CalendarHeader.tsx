import React from "react";

import NextIcon from "@/assets/NextIcon";
import PrevIcon from "@/assets/PrevIcon";

import { Header, HeaderTitle } from "./CalendarHeader.styled";

interface CalendarHeaderProps {
  title: string;
}

function CalendarHeader({ title }: CalendarHeaderProps) {
  return (
    <Header>
      <PrevIcon />
      <HeaderTitle>{title}</HeaderTitle>
      <NextIcon />
    </Header>
  );
}

export default CalendarHeader;
