import React, { memo } from "react";

import CalendarHeader from "@/components/CalendarHeader";
import CalendarWeekHeader from "@/components/CalendarWeekHeader";
import CalendarWrapper from "@/components/CalendarWrapper";
import FooterButton from "@/components/FooterButton";

import { Wrapper } from "./Calendar.styled";
import { CalendarProps } from "./interfaces";

const Calendar = memo(function Calendar({ hasClearButton }: CalendarProps) {
  return (
    <Wrapper>
      <CalendarWrapper removeBottomBorder={hasClearButton}>
        <CalendarHeader title="November 2022" />
        <CalendarWeekHeader />
      </CalendarWrapper>
      {hasClearButton && <FooterButton title="Clear" />}
    </Wrapper>
  );
});

export default Calendar;
