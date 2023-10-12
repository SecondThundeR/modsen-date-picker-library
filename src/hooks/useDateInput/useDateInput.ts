import { ChangeEventHandler, useCallback, useState } from "react";

import { DATE_INPUT_MAX_LENGTH } from "@/constants/date";
import { INPUT_REGEX } from "@/constants/regexRules";
import useClearEnabled from "@/hooks/useClearEnabled";
import useDateValue from "@/hooks/useDateValue";
import { isDateInRange } from "@/utils/calendar";
import { isValidDate, parseDateString } from "@/utils/date";

import { UseInputOptions } from "./interfaces";

function useDateInput({
  dateString,
  startDate,
  endDate,
  onDateChange,
  onClearClick,
}: UseInputOptions) {
  const {
    value,
    handlers: { setInputValue, clearValue },
  } = useDateValue(dateString);
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
      if (!INPUT_REGEX.test(inputValue)) {
        setIsError(true);
        return;
      }

      setInputValue(inputValue);
      if (inputValue.length < DATE_INPUT_MAX_LENGTH) return;
      if (!isValidDate(inputValue)) {
        setIsError(true);
        return;
      }

      const parsedDate = parseDateString(inputValue);
      if (!isDateInRange(parsedDate, startDate, endDate)) {
        setIsError(true);
        return;
      }

      onDateChange(parsedDate);
    },
    [setInputValue, startDate, endDate, onDateChange],
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
