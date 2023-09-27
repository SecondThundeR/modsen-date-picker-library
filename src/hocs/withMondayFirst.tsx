import React, { ComponentType } from "react";

import { DatePickerProps } from "@/components/DatePicker/interfaces";

interface WithMondayFirstProps extends Pick<DatePickerProps, "isSundayFirst"> {}

export function withMondayFirst<T extends WithMondayFirstProps>(
  WrappedComponent: ComponentType<T>,
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithMondayFirst = (
    props: Omit<T, keyof WithMondayFirstProps>,
  ) => {
    return <WrappedComponent {...(props as T)} isSundayFirst={false} />;
  };

  ComponentWithMondayFirst.displayName = `withMondayFirst(${displayName})`;

  return ComponentWithMondayFirst;
}
