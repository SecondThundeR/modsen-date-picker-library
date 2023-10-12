import { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "placeholder" | "value" | "maxLength" | "onChange"
  > {
  isError?: boolean;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
}

export interface InputStyleProps {
  $isError?: boolean;
}
