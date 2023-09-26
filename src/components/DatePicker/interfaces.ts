import { Holidays } from "@/utils/calendar";

export interface DatePickerProps {
  startDate?: Date;
  endDate?: Date;
  holidays?: Holidays | null;
  displayWeekends?: boolean;
  isSundayFirst?: boolean;
}
