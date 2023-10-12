import React, { memo } from "react";

import CalendarIcon from "@/components/CalendarIcon";
import ClearIcon from "@/components/ClearIcon";
import Input from "@/components/Input";
import { DATE_INPUT_MAX_LENGTH } from "@/constants/date";
import { useDateInput } from "@/hooks";
import { getDefaultEndDate, getDefaultStartDate } from "@/utils/date";

import { ErrorMessage, Title, Wrapper } from "./DateInput.styled";
import { InputProps } from "./interfaces";

const DateInput = memo(function DateInput({
  title = "Date",
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
    startDate,
    endDate,
    onClearClick,
    onDateChange,
  });

  return (
    <Wrapper>
      <Title>{title}</Title>
      {isError && <ErrorMessage>Invalid date!</ErrorMessage>}
      <Input
        placeholder="Choose date"
        value={value}
        maxLength={DATE_INPUT_MAX_LENGTH}
        onChange={onInputChange}
        isError={isError}
        leftSlot={
          isCalendarEnabled && (
            <CalendarIcon
              data-testid="calendar-icon"
              onClick={onCalendarClick}
            />
          )
        }
        rightSlot={
          isClearEnabled && <ClearIcon data-testid="clear" onClick={onClear} />
        }
      />
    </Wrapper>
  );
});

export default DateInput;
