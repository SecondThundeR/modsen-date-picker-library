import { useCallback, useState } from "react";

import usePickToggle from "@/hooks/usePickToggle";

function useRangePicker() {
  const [currentMode, onToggle] = usePickToggle();
  const [startRange, setStartRange] = useState<Date | null>(null);
  const [endRange, setEndRange] = useState<Date | null>(null);

  const updateStartRange = useCallback((date: Date | null) => {
    setStartRange(date);
  }, []);

  const updateEndRange = useCallback((date: Date | null) => {
    setEndRange(date);
  }, []);

  const onUpdate = useCallback(
    (date: Date | null) => {
      if (currentMode === "start") updateStartRange(date);
      else updateEndRange(date);
      onToggle();
    },
    [currentMode, onToggle, updateEndRange, updateStartRange],
  );

  return {
    values: { startRange, endRange },
    actions: { onUpdate },
  };
}

export default useRangePicker;
