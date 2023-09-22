import React, { memo } from "react";

import CalendarHeader from "@/components/CalendarHeader";
import CalendarWeekHeader from "@/components/CalendarWeekHeader";
import CalendarWrapper from "@/components/CalendarWrapper";
import FooterButton from "@/components/FooterButton";
import { CALENDAR_PLACEHOLDER } from "@/constants/calendarPlaceholder";

import CalendarWeekRow from "../CalendarWeekRow";
import { Wrapper } from "./Calendar.styled";
import { CalendarProps } from "./interfaces";

const Calendar = memo(function Calendar({ hasClearButton }: CalendarProps) {
  const weekRows = CALENDAR_PLACEHOLDER.map((items, index) => (
    <CalendarWeekRow key={`week-${index}`} items={items} />
  ));
  return (
    <Wrapper>
      <CalendarWrapper removeBottomBorder={hasClearButton}>
        <CalendarHeader title="November 2022" />
        <CalendarWeekHeader />
        {weekRows}
      </CalendarWrapper>
      {hasClearButton && <FooterButton title="Clear" />}
    </Wrapper>
  );
});

export default Calendar;
