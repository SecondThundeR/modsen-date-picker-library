import { CalendarType } from "@/components/Calendar/interfaces";
import { Holidays } from "@/utils/calendar";

export interface DatePickerProps {
  title?: string;
  type?: CalendarType;
  startDate?: Date;
  endDate?: Date;
  startRange?: Date | null;
  isPickingStart?: boolean;
  endRange?: Date | null;
  isPickingEnd?: boolean;
  holidays?: Holidays | null;
  displayWeekends?: boolean;
  isSundayFirst?: boolean;
  isTodosEnabled?: boolean;
  onChange?: (date: Date | null) => void;
}
