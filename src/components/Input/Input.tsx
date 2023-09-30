import React, {
  ChangeEventHandler,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";

import CalendarIcon from "@/assets/CalendarIcon";
import ClearIcon from "@/assets/ClearIcon";
import {
  formatDateForValue,
  getDefaultEndDate,
  getDefaultStartDate,
  isInRange,
  isValidDate,
  parseDate,
} from "@/utils/date";
import { isValidValue } from "@/utils/input";

import {
  ErrorMessage,
  InputWrapper,
  StyledInput,
  Title,
  Wrapper,
} from "./Input.styled";
import { InputProps } from "./interfaces";

const Input = memo(function Input({
  title = "Date",
  type = "regular",
  dateString,
  startDate = getDefaultStartDate(),
  endDate = getDefaultEndDate(),
  isCalendarEnabled = true,
  onDateChange,
  onCalendarClick,
  onClearClick,
}: InputProps) {
  const [value, setValue] = useState(() =>
    formatDateForValue(dateString, type),
  );
  const [isClearVisible, setIsClearVisible] = useState(
    () => value.length !== 0,
  );
  const [isError, setIsError] = useState(false);
  const maxLength = type === "regular" ? 10 : type === "month" ? 7 : 4;

  const onClear = useCallback(() => {
    setValue("");
    setIsError(false);
    onClearClick();
  }, [onClearClick]);

  useEffect(() => {
    setValue(() => formatDateForValue(dateString, type));
  }, [dateString, type]);

  useEffect(() => {
    setIsClearVisible(value !== undefined && value.length !== 0);
  }, [value]);

  const onInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setIsError(false);
      const { value: inputValue } = event.target;

      if (!isValidValue(inputValue)) return;

      setValue(inputValue);
      if (!isValidDate(inputValue, type)) return;

      const parsedDate = parseDate(inputValue);

      if (!isInRange(parsedDate, startDate, endDate)) {
        setIsError(true);
        return;
      }

      onDateChange(parsedDate);
    },
    [type, startDate, endDate, onDateChange],
  );

  return (
    <Wrapper>
      <Title>{title}</Title>
      {isError && <ErrorMessage>Invalid date!</ErrorMessage>}
      <InputWrapper $isError={isError}>
        {isCalendarEnabled && (
          <CalendarIcon data-testid="calendar-icon" onClick={onCalendarClick} />
        )}
        <StyledInput
          data-testid="input"
          type="text"
          placeholder="Choose date"
          value={value}
          maxLength={maxLength}
          onChange={onInputChange}
        />
        {isClearVisible && <ClearIcon data-testid="clear" onClick={onClear} />}
      </InputWrapper>
    </Wrapper>
  );
});

export default Input;
