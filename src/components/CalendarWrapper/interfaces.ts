import { PropsWithChildren } from "react";

export type CalendarWrapperProps = PropsWithChildren<{
  removeBottomBorder?: boolean;
}>;

export type CalendarWrapperStyleProps = { $removeBottomBorder?: boolean };
