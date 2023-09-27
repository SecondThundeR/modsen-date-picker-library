import React, { ComponentType } from "react";

import { DatePickerProps } from "@/components/DatePicker/interfaces";

interface WithWeekendsProps extends Pick<DatePickerProps, "displayWeekends"> {}

export function withWeekends<T extends WithWeekendsProps>(
  WrappedComponent: ComponentType<T>,
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithWeekends = (props: Omit<T, keyof WithWeekendsProps>) => {
    return <WrappedComponent {...(props as T)} displayWeekends={true} />;
  };

  ComponentWithWeekends.displayName = `withWeekends(${displayName})`;

  return ComponentWithWeekends;
}
