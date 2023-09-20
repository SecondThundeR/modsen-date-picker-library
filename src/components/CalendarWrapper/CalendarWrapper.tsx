import React, { PropsWithChildren } from "react";

import { Wrapper } from "./CalendarWrapper.styled";

type CalendarWrapperProps = PropsWithChildren<{
  removeBottomBorder?: boolean;
}>;

function CalendarWrapper({
  children,
  removeBottomBorder = false,
}: CalendarWrapperProps) {
  return <Wrapper $removeBottomBorder={removeBottomBorder}>{children}</Wrapper>;
}

export default CalendarWrapper;
