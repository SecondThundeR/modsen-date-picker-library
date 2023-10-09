import { useCallback, useState } from "react";

import { CalendarType, UseCalendarTypeOptions } from "./interfaces";

function useCalendarType({ onChange }: UseCalendarTypeOptions) {
  const [type, setType] = useState<CalendarType>("regular");

  const onDateChange = useCallback(
    (date: Date) => {
      if (type === "month" || type === "year") {
        setType("regular");
      }
      onChange(date);
    },
    [type, onChange],
  );

  const onTitle = useCallback(() => {
    switch (type) {
      case "regular":
        setType("month");
        break;
      case "month":
        setType("year");
        break;
      case "year":
        setType("regular");
        break;
    }
  }, [type]);

  return {
    type,
    handlers: {
      onDateChange,
      onTitle,
    },
  };
}

export default useCalendarType;
