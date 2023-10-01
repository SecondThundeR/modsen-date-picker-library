import { DatePickerProps } from "@/components/DatePicker/interfaces";

export interface UseDatePickerOptions
  extends Pick<
    DatePickerProps,
    | "type"
    | "startRange"
    | "endRange"
    | "isPickingStart"
    | "isPickingEnd"
    | "onChange"
  > {}
