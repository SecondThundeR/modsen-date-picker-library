import React from "react";

import { InputWrapper, Wrapper } from "./Input.styled";
import { InputProps } from "./interfaces";

function Input({
  type = "text",
  placeholder,
  value,
  maxLength,
  onChange,
  leftSlot,
  rightSlot,
  isError = false,
}: InputProps) {
  return (
    <InputWrapper data-testid="input-wrapper" $isError={isError}>
      {leftSlot}
      <Wrapper
        $isError={isError}
        data-testid="input"
        type={type}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        onChange={onChange}
      />
      {rightSlot}
    </InputWrapper>
  );
}

export default Input;
