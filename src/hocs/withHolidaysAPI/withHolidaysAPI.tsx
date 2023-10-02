import React, { ComponentType } from "react";

import { useHolidaysAPI } from "@/hooks";

import { WithHolidaysAPIOptions, WithHolidaysAPIProps } from "./interfaces";

function withHolidaysAPI<T extends WithHolidaysAPIProps>(
  WrappedComponent: ComponentType<T>,
  {
    holidayCountry,
    year = new Date().getFullYear() - 1,
  }: WithHolidaysAPIOptions,
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithHolidaysAPI = (
    props: Omit<T, keyof WithHolidaysAPIProps>,
  ) => {
    const holidays = useHolidaysAPI({ holidayCountry, year });
    return <WrappedComponent {...(props as T)} holidays={holidays} />;
  };

  ComponentWithHolidaysAPI.displayName = `withHolidaysAPI(${displayName})`;

  return ComponentWithHolidaysAPI;
}

export default withHolidaysAPI;
