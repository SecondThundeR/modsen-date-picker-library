import { useCallback, useEffect, useState } from "react";

import { CalendarType } from "@/components/Calendar/interfaces";
import { formatDateForValue } from "@/utils/date";

function useDateValue(dateString: string, type: CalendarType) {
  const [value, setValue] = useState(() =>
    formatDateForValue(dateString, type),
  );

  const setInputValue = useCallback((value: string) => {
    setValue(value);
  }, []);

  const clearValue = useCallback(() => {
    setValue("");
  }, []);

  useEffect(() => {
    setValue(() => formatDateForValue(dateString, type));
  }, [dateString, type]);

  return { value, handlers: { setInputValue, clearValue } };
}

export default useDateValue;
