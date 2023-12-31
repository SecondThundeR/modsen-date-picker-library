import React from "react";

import { Wrapper } from "./CalendarWrapper.styled";
import { CalendarWrapperProps } from "./interfaces";

function CalendarWrapper({
  children,
  removeBottomBorder = false,
}: CalendarWrapperProps) {
  return (
    <Wrapper
      data-testid="calendar-wrapper"
      $removeBottomBorder={removeBottomBorder}
    >
      {children}
    </Wrapper>
  );
}

export default CalendarWrapper;
