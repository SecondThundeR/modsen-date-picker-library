import { InputProps } from "@/components/DateInput/interfaces";

export interface UseInputOptions
  extends Pick<
    InputProps,
    "dateString" | "onClearClick" | "onDateChange" | "startDate" | "endDate"
  > {}
