import { RangeState } from "@/components/CalendarButton/interfaces";
import {
  CALENDAR_MONTHS,
  CALENDAR_NON_REGULAR_GRID_SIZE,
  CALENDAR_WEEKS,
  DEFAULT_MONTH,
  FEBRUARY_MONTH_NUMBER,
  MONTHS_WITH_30_DAYS,
  THIS_MONTH,
  THIS_YEAR,
} from "@/constants/date";
import { CalendarType } from "@/hooks/useCalendarType/interfaces";

import { isInRange } from "./date";

export interface DateState {
  month: number;
  year: number;
}

/**
 * Defines structure for holidays data
 *
 * Example of usage: `{ "1": [1, 2, 3, 4], ... }`
 * (where __key__ - month number and __array of numbers__ - days)
 *
 * This allows us to quickly grab array of holidays for day's month
 */
export interface Holidays {
  [month: string]: number[];
}

export const zeroPad = (value: number | string, length: number) => {
  return `${value}`.padStart(length, "0");
};

export const getDayKey = (date: Date) =>
  `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

export const getRangeState = (
  isStart: boolean,
  isBetween: boolean,
  isEnd: boolean,
): RangeState | undefined => {
  return isStart ? "start" : isEnd ? "end" : isBetween ? "between" : undefined;
};

export const getNextDay = () => {
  const nextDay = new Date();
  nextDay.setDate(nextDay.getDate() + 1);
  return nextDay;
};

export const getMonthDays = (monthNumber = THIS_MONTH, year = THIS_YEAR) => {
  const isLeapYear = year % 4 === 0;

  if (monthNumber === FEBRUARY_MONTH_NUMBER) {
    return isLeapYear ? 29 : 28;
  } else if (MONTHS_WITH_30_DAYS.includes(monthNumber)) {
    return 30;
  } else {
    return 31;
  }
};

export const getMonthFirstDay = (
  monthNumber = THIS_MONTH,
  year = THIS_YEAR,
) => {
  return new Date(`${year}-${zeroPad(monthNumber, 2)}-01`).getDay() + 1;
};

export const isDateAHoliday = (date: Date, holidays: Holidays | null) => {
  if (holidays === null) return false;

  const monthHolidays = holidays[String(date.getMonth() + 1)];
  if (!monthHolidays) return false;

  return monthHolidays.includes(date.getDate());
};

export const isDate = (date: unknown): date is Date => {
  const isDate = Object.prototype.toString.call(date) === "[object Date]";
  const isValidDate = date && !Number.isNaN(date.valueOf());

  return isDate && (isValidDate as boolean);
};

export const isDateAWeekend = (date: Date) => {
  return date.getDay() === 0 || date.getDay() === 6;
};

export const isSameDay = (date: Date, basedate: Date | null) => {
  if (!(isDate(date) && isDate(basedate))) return false;

  const basedateDate = basedate.getDate();
  const basedateMonth = basedate.getMonth() + 1;
  const basedateYear = basedate.getFullYear();
  const dateDate = date.getDate();
  const dateMonth = date.getMonth() + 1;
  const dateYear = date.getFullYear();
  return (
    basedateDate === dateDate &&
    basedateMonth === dateMonth &&
    basedateYear === dateYear
  );
};

export const getPreviousMonth = (monthNumber: number, year: number) => {
  const prevMonth = monthNumber > 1 ? monthNumber - 1 : 12;
  const prevMonthYear = monthNumber > 1 ? year : year - 1;

  return { month: prevMonth, year: prevMonthYear };
};

export const getPreviousYear = (monthNumber: number, year: number) => {
  const prevYear = year - 1;
  return { month: monthNumber, year: prevYear };
};

export const getPreviousDecade = (year: number) => {
  const [startYear, _endYear] = getYearPickerRange(year);
  return { month: DEFAULT_MONTH, year: startYear - 1 };
};

export const getNextMonth = (monthNumber: number, year: number) => {
  const nextMonth = monthNumber < 12 ? monthNumber + 1 : 1;
  const nextMonthYear = monthNumber < 12 ? year : year + 1;

  return { month: nextMonth, year: nextMonthYear };
};

export const getNextYear = (monthNumber: number, year: number) => {
  const nextYear = year + 1;
  return { month: monthNumber, year: nextYear };
};

export const getNextDecade = (year: number) => {
  const [_startYear, endYear] = getYearPickerRange(year);
  return { month: DEFAULT_MONTH, year: endYear + 1 };
};

export const isStartRangeCorrect = (endRange: Date | null, newDate: Date) => {
  if (!isDate(endRange) || !isDate(newDate)) return false;
  return endRange.getTime() > newDate.getTime();
};

export const isEndRangeCorrect = (startRange: Date | null, newDate: Date) => {
  if (!isDate(startRange) || !isDate(newDate)) return false;
  return startRange.getTime() < newDate.getTime();
};

export const isDateInStartRange = (
  startDate: Date | null,
  currentDate: DateState,
) => {
  if (!isDate(startDate)) return false;

  const startDateMonth = startDate.getMonth() - 1;
  const startDateYear = startDate.getFullYear();
  const { month: currentDateMonth, year: currentDateYear } = currentDate;

  if (startDateYear > currentDateYear) return false;
  if (startDateYear === currentDateYear && startDateMonth > currentDateMonth)
    return false;
  return true;
};

export const isDateInEndRange = (
  endDate: Date | null,
  currentDate: DateState,
) => {
  if (!isDate(endDate)) return false;

  const endDateMonth = endDate.getMonth() + 1;
  const endDateYear = endDate.getFullYear();
  const { month: currentDateMonth, year: currentDateYear } = currentDate;

  if (endDateYear < currentDateYear) return false;
  if (endDateYear === currentDateYear && endDateMonth < currentDateMonth)
    return false;
  return true;
};

export const isDateInRange = (
  startDate: Date | null,
  endDate: Date | null,
  date: Date,
) => {
  if (!(isDate(startDate) && isDate(endDate) && isDate(date))) return false;
  return isInRange(date, startDate, endDate);
};

export const extractDateState = (date = new Date()) => {
  if (!isDate(date)) {
    const today = new Date();
    return {
      month: today.getMonth() + 1,
      year: today.getFullYear(),
    };
  }

  return {
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
};

export const formatDateState = (
  calendarType: CalendarType,
  dateState: DateState,
) => {
  const { month, year } = dateState;
  if (calendarType === "month") return String(year);
  if (calendarType === "year") {
    const [startYear, endYear] = getYearPickerRange(year);
    return `${startYear} - ${endYear}`;
  }

  const monthString =
    Object.keys(CALENDAR_MONTHS)[Math.max(0, Math.min(month - 1, 11))];
  return `${monthString} ${year}`;
};

export const getCalendarMonthsData = (year: number) => {
  const monthsTitles = Object.values(CALENDAR_MONTHS);
  const monthsData = new Array(CALENDAR_NON_REGULAR_GRID_SIZE)
    .fill(0)
    .map((_, index) => {
      const monthNum = index + 1;
      return [year, zeroPad(monthNum, 2), monthsTitles[index]];
    });

  return monthsData;
};

const getYearPickerRange = (year: number) => {
  let startYear;
  if (year % CALENDAR_NON_REGULAR_GRID_SIZE === 0)
    startYear = year - CALENDAR_NON_REGULAR_GRID_SIZE + 1;
  else startYear = year - (year % CALENDAR_NON_REGULAR_GRID_SIZE) + 1;
  const endYear = startYear + CALENDAR_NON_REGULAR_GRID_SIZE - 1;
  return [startYear, endYear];
};

export const getCalendarYearsData = (year: number) => {
  const [startYear, endYear] = getYearPickerRange(year);

  const yearsData = new Array(endYear - startYear + 1)
    .fill(0)
    .map((_, index) => {
      const yearNum = startYear + index;
      return yearNum;
    });

  return yearsData;
};

export const getCalendarData = (
  monthNumber: number,
  year: number,
  isSundayFirst: boolean,
) => {
  const monthDays = getMonthDays(monthNumber, year);
  const monthFirstDay = getMonthFirstDay(monthNumber, year);

  let daysFromPrevMonth: number;
  if (isSundayFirst) {
    daysFromPrevMonth = monthFirstDay - 1;
  } else {
    daysFromPrevMonth = monthFirstDay - 2;

    if (daysFromPrevMonth === -1 && monthFirstDay === 1) {
      daysFromPrevMonth = 6;
    } else if (daysFromPrevMonth === -1) {
      daysFromPrevMonth = 1;
    }
  }
  const daysFromNextMonth =
    CALENDAR_WEEKS * 7 - (daysFromPrevMonth + monthDays);

  const { month: prevMonth, year: prevMonthYear } = getPreviousMonth(
    monthNumber,
    year,
  );
  const { month: nextMonth, year: nextMonthYear } = getNextMonth(
    monthNumber,
    year,
  );

  const prevMonthDays = getMonthDays(prevMonth, prevMonthYear);

  const prevMonthDates = new Array(daysFromPrevMonth)
    .fill(0)
    .map((_, index) => {
      const day = index + 1 + (prevMonthDays - daysFromPrevMonth);
      return [prevMonthYear, zeroPad(prevMonth, 2), zeroPad(day, 2)];
    });

  const thisMonthDates = new Array(monthDays).fill(0).map((_, index) => {
    const day = index + 1;
    return [year, zeroPad(monthNumber, 2), zeroPad(day, 2)];
  });

  const nextMonthDates = new Array(daysFromNextMonth)
    .fill(0)
    .map((_, index) => {
      const day = index + 1;
      return [nextMonthYear, zeroPad(nextMonth, 2), zeroPad(day, 2)];
    });

  return [...prevMonthDates, ...thisMonthDates, ...nextMonthDates];
};
