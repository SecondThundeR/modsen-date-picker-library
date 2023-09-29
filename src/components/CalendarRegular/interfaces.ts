// export interface CalendarProps {
//     date: Date;
//     type: CalendarType;
//     startDate: Date;
//     endDate: Date;
//     startRange: Date | null;
//     endRange: Date | null;
//     isSundayFirst: boolean;
//     displayWeekends: boolean;
//     holidays: Holidays | null;
//     isTodosEnabled: boolean;
//     hasClearButton?: boolean;
//     onChange: (date: Date) => void;
//   }

import { CalendarProps } from "@/components/Calendar/interfaces";
import { DateState } from "@/utils/calendar";

export interface CalendarRegularProps
  extends Omit<CalendarProps, "type" | "hasClearButton"> {
  dateState: DateState;
}
