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
  dateString,
  startDate = getDefaultStartDate(),
  endDate = getDefaultEndDate(),
  isCalendarEnabled = true,
  onDateChange,
  onCalendarClick,
  onClearClick,
}: InputProps) {
  const [value, setValue] = useState(dateString);
  const [isClearVisible, setIsClearVisible] = useState(
    () => value.length !== 0,
  );
  const [isError, setIsError] = useState(false);

  const onClear = useCallback(() => {
    setValue("");
    setIsError(false);
    onClearClick();
  }, [onClearClick]);

  useEffect(() => {
    setValue(dateString);
  }, [dateString]);

  useEffect(() => {
    setIsClearVisible(value.length !== 0);
  }, [value.length]);

  const onInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setIsError(false);
      const { value: inputValue } = event.target;

      if (!isValidValue(inputValue)) return;

      setValue(inputValue);
      if (!isValidDate(inputValue)) return;

      const parsedDate = parseDate(inputValue);

      if (!isInRange(parsedDate, startDate, endDate)) {
        setIsError(true);
        return;
      }

      onDateChange(parsedDate);
    },
    [startDate, endDate, onDateChange],
  );

  return (
    <Wrapper>
      <Title>{title}</Title>
      {isError && <ErrorMessage>Invalid date!</ErrorMessage>}
      <InputWrapper $isError={isError}>
        {isCalendarEnabled && <CalendarIcon onClick={onCalendarClick} />}
        <StyledInput
          data-testid="input"
          type="text"
          placeholder="Choose date"
          value={value}
          maxLength={10}
          onChange={onInputChange}
        />
        {isClearVisible && <ClearIcon data-testid="clear" onClick={onClear} />}
      </InputWrapper>
    </Wrapper>
  );
});

export default Input;
