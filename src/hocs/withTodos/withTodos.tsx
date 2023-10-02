import React, { ComponentType } from "react";

import { DatePickerProps } from "@/components/DatePicker/interfaces";

interface WithTodosProps extends Pick<DatePickerProps, "isTodosEnabled"> {}

function withTodos<T extends WithTodosProps>(
  WrappedComponent: ComponentType<T>,
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithTodos = (props: Omit<T, keyof WithTodosProps>) => {
    return <WrappedComponent {...(props as T)} isTodosEnabled />;
  };

  ComponentWithTodos.displayName = `withTodos(${displayName})`;

  return ComponentWithTodos;
}

export default withTodos;
