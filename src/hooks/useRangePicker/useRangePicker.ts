import { useCallback, useState } from "react";

function useRangePicker() {
  const [startRange, setStartRange] = useState<Date | null>(null);
  const [endRange, setEndRange] = useState<Date | null>(null);

  const updateStartRange = useCallback(
    (date: Date | null) => {
      setStartRange(date);
    },
    [setStartRange],
  );

  const updateEndRange = useCallback(
    (date: Date | null) => {
      setEndRange(date);
    },
    [setEndRange],
  );

  return {
    values: { startRange, endRange },
    actions: { updateStartRange, updateEndRange },
  };
}

export default useRangePicker;
