import React, { ComponentType } from "react";

import { DatePickerProps } from "@/components/DatePicker/interfaces";

interface WithHolidaysProps extends Pick<DatePickerProps, "holidays"> {}

function withHolidays<T extends WithHolidaysProps>(
  WrappedComponent: ComponentType<T>,
  holidays: WithHolidaysProps,
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithHolidays = (props: Omit<T, keyof WithHolidaysProps>) => {
    return <WrappedComponent {...(props as T)} holidays={holidays} />;
  };

  ComponentWithHolidays.displayName = `withHolidays(${displayName})`;

  return ComponentWithHolidays;
}

export default withHolidays;
