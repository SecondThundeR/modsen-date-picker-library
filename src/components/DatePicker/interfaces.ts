import { Holidays } from "@/utils/calendar";

export interface DatePickerProps {
  title?: string;
  startDate?: Date;
  endDate?: Date;
  startRange?: Date | null;
  isPickingStart?: boolean;
  endRange?: Date | null;
  isPickingEnd?: boolean;
  holidays?: Holidays | null;
  displayWeekends?: boolean;
  isSundayFirst?: boolean;
  onChange?: (date: Date | null) => void;
}
