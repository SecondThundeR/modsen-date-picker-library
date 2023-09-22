import React, { memo } from "react";

import CalendarButton from "../CalendarButton";
import { Wrapper } from "./CalendarWeekRow.styled";
import { CalendarWeekRowProps } from "./interfaces";

const CalendarWeekRow = memo(function CalendarWeekRow({
  items,
}: CalendarWeekRowProps) {
  if (items.length > 7)
    throw new Error("Week row cannot contain more than 7 elements");

  return (
    <Wrapper>
      {items.map((item) => {
        const { value, ...itemProps } = item;
        return <CalendarButton key={value} title={value} {...itemProps} />;
      })}
    </Wrapper>
  );
});

export default CalendarWeekRow;
