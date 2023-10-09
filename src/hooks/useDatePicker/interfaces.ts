import { DatePickerProps } from "@/components/DatePicker/interfaces";

export interface UseDatePickerOptions
  extends Pick<
    DatePickerProps,
    "startRange" | "endRange" | "isPickingStart" | "isPickingEnd" | "onChange"
  > {}
