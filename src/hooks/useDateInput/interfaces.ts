import { InputProps } from "@/components/DateInput/interfaces";

export interface UseInputOptions
  extends Pick<
    InputProps,
    | "dateString"
    | "type"
    | "onClearClick"
    | "onDateChange"
    | "startDate"
    | "endDate"
  > {}
