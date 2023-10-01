import { useCallback, useState } from "react";

import { isEndRangeCorrect, isStartRangeCorrect } from "@/utils/calendar";

import { UseDatePickerOptions } from "./interfaces";

function useDatePicker({
  type,
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
      if (
        type === "regular" &&
        changedDate.getDate() === date?.getDate() &&
        changedDate.getMonth() === date?.getMonth()
      )
        return;
      if (type === "month" && changedDate.getMonth() === date?.getMonth())
        return;
      if (type === "year" && changedDate.getFullYear() === date?.getFullYear())
        return;
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
    [date, endRange, isPickingEnd, isPickingStart, onChange, startRange, type],
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
