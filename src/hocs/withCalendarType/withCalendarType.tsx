import React, { ComponentType } from "react";

import { DatePickerProps } from "@/components/DatePicker/interfaces";

interface WithCalendarTypeProps extends Pick<DatePickerProps, "type"> {}

function withCalendarType<T extends WithCalendarTypeProps>(
  WrappedComponent: ComponentType<T>,
  type: WithCalendarTypeProps["type"],
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithCalendarType = (
    props: Omit<T, keyof WithCalendarTypeProps>,
  ) => {
    return <WrappedComponent {...(props as T)} type={type} />;
  };

  ComponentWithCalendarType.displayName = `withCalendarType(${displayName})`;

  return ComponentWithCalendarType;
}

export default withCalendarType;
