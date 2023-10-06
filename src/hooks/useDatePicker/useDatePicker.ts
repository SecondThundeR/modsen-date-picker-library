import { useCallback, useState } from "react";

import {
  isEndRangeCorrect,
  isSameDay,
  isStartRangeCorrect,
} from "@/utils/calendar";

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

  const onDateChange = useCallback(
    (changedDate: Date) => {
      if (isSameDay(changedDate, date)) return;
      if (
        isPickingStart &&
        endRange &&
        !isStartRangeCorrect(endRange, changedDate)
      )
        return;
      if (
        isPickingEnd &&
        startRange &&
        !isEndRangeCorrect(startRange, changedDate)
      )
        return;

      setDate(changedDate);
      onChange?.(changedDate);
    },
    [date, endRange, isPickingEnd, isPickingStart, onChange, startRange],
  );

  const onClearClick = useCallback(() => {
    setDate(null);
    onChange?.(null);
  }, [onChange]);

  const toggleCalendar = useCallback(() => {
    setShowCalendar((prev) => !prev);
  }, []);

  return {
    date,
    showCalendar,
    handlers: { onDateChange, onClearClick, toggleCalendar },
  };
}

export default useDatePicker;
