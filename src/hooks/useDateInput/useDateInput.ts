import { ChangeEventHandler, useCallback, useState } from "react";

import useClearEnabled from "@/hooks/useClearEnabled";
import useDateValue from "@/hooks/useDateValue";
import { isInRange, isValidDate, parseDate } from "@/utils/date";
import { isValidValue } from "@/utils/input";

import { UseInputOptions } from "./interfaces";

function useDateInput({
  dateString,
  type = "regular",
  startDate,
  endDate,
  onDateChange,
  onClearClick,
}: UseInputOptions) {
  const {
    value,
    handlers: { setInputValue, clearValue },
  } = useDateValue(dateString, type);
  const isClearEnabled = useClearEnabled(value);
  const [isError, setIsError] = useState(false);

  const onClear = useCallback(() => {
    clearValue();
    setIsError(false);
    onClearClick();
  }, [clearValue, onClearClick]);

  const onInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setIsError(false);
      const { value: inputValue } = event.target;
      if (!isValidValue(inputValue)) return;

      setInputValue(inputValue);
      if (!isValidDate(inputValue, type)) return;

      const parsedDate = parseDate(inputValue);
      if (!isInRange(parsedDate, startDate, endDate)) {
        setIsError(true);
        return;
      }

      onDateChange(parsedDate);
    },
    [setInputValue, type, startDate, endDate, onDateChange],
  );

  return {
    value,
    isClearEnabled,
    isError,
    handlers: {
      onClear,
      onInputChange,
    },
  };
}

export default useDateInput;
