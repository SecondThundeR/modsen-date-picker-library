import { useCallback, useState } from "react";

import { isSameDay } from "@/utils/date";

import { UseDatePickerOptions } from "./interfaces";

function useDatePicker({
  startRange,
  endRange,
  isPickingStart,
  isPickingEnd,
  onChange,
}: UseDatePickerOptions) {
  const [date, setDate] = useState<Date | null>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarDate = isPickingStart
    ? startRange
    : isPickingEnd
    ? endRange
    : date;

  const onDateChange = useCallback(
    (changedDate: Date) => {
      if (isSameDay(changedDate, date)) return;
      setDate(changedDate);
      onChange?.(changedDate);
    },
    [date, onChange],
  );

  const onClearClick = useCallback(() => {
    setDate(null);
    onChange?.(null);
  }, [onChange]);

  const toggleCalendar = useCallback(() => {
    setShowCalendar((prev) => !prev);
  }, []);

  return {
    date: calendarDate,
    showCalendar,
    handlers: { onDateChange, onClearClick, toggleCalendar },
  };
}

export default useDatePicker;
