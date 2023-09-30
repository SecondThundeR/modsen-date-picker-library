import React, { memo } from "react";

import CalendarIcon from "@/assets/CalendarIcon";
import ClearIcon from "@/assets/ClearIcon";
import { useDateInput } from "@/hooks";
import { getDefaultEndDate, getDefaultStartDate } from "@/utils/date";
import { getInputMaxLength } from "@/utils/input";

import {
  ErrorMessage,
  Input,
  InputWrapper,
  Title,
  Wrapper,
} from "./DateInput.styled";
import { InputProps } from "./interfaces";

const DateInput = memo(function DateInput({
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
  const {
    value,
    isClearEnabled,
    isError,
    handlers: { onInputChange, onClear },
  } = useDateInput({
    dateString,
    type,
    startDate,
    endDate,
    onClearClick,
    onDateChange,
  });
  const maxLength = getInputMaxLength(type);

  return (
    <Wrapper>
      <Title>{title}</Title>
      {isError && <ErrorMessage>Invalid date!</ErrorMessage>}
      <InputWrapper $isError={isError}>
        {isCalendarEnabled && (
          <CalendarIcon data-testid="calendar-icon" onClick={onCalendarClick} />
        )}
        <Input
          data-testid="input"
          type="text"
          placeholder="Choose date"
          value={value}
          maxLength={maxLength}
          onChange={onInputChange}
        />
        {isClearEnabled && <ClearIcon data-testid="clear" onClick={onClear} />}
      </InputWrapper>
    </Wrapper>
  );
});

export default DateInput;
