import {
  CALENDAR_MONTHS,
  CALENDAR_WEEKS,
  FEBRUARY_MONTH_NUMBER,
  MONTHS_WITH_30_DAYS,
  THIS_MONTH,
  THIS_YEAR,
} from "@/constants/date";

export interface DateState {
  month: number;
  year: number;
}

export const zeroPad = (value: number | string, length: number) => {
  return `${value}`.padStart(length, "0");
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

export const isDate = (date: unknown): date is Date => {
  const isDate = Object.prototype.toString.call(date) === "[object Date]";
  const isValidDate = date && !Number.isNaN(date.valueOf());

  return isDate && (isValidDate as boolean);
};

export const isSameMonth = (date: Date, basedate = new Date()) => {
  if (!(isDate(date) && isDate(basedate))) return false;

  const basedateMonth = basedate.getMonth() + 1;
  const basedateYear = basedate.getFullYear();
  const dateMonth = date.getMonth() + 1;
  const dateYear = date.getFullYear();

  return basedateMonth === dateMonth && basedateYear === dateYear;
};

export const isSameDay = (date: Date, basedate = new Date()) => {
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

export const getNextMonth = (monthNumber: number, year: number) => {
  const nextMonth = monthNumber < 12 ? monthNumber + 1 : 1;
  const nextMonthYear = monthNumber < 12 ? year : year + 1;

  return { month: nextMonth, year: nextMonthYear };
};

export const isDateInStartRange = (startDate: Date, currentDate: DateState) => {
  if (!isDate(startDate)) return false;

  const startDateMonth = startDate.getMonth();
  const startDateYear = startDate.getFullYear();
  const { month: currentDateMonth, year: currentDateYear } = currentDate;

  if (startDateYear > currentDateYear) return false;
  if (startDateYear === currentDateYear && startDateMonth > currentDateMonth)
    return false;

  return true;
};

export const isDateInEndRange = (endDate: Date, currentDate: DateState) => {
  if (!isDate(endDate)) return false;

  const endDateMonth = endDate.getMonth();
  const endDateYear = endDate.getFullYear();
  const { month: currentDateMonth, year: currentDateYear } = currentDate;

  if (endDateYear < currentDateYear) return false;
  if (endDateYear === currentDateYear && endDateMonth < currentDateMonth)
    return false;

  return true;
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

export const formatDateState = (dateState: DateState) => {
  const { month, year } = dateState;
  const monthString =
    Object.keys(CALENDAR_MONTHS)[Math.max(0, Math.min(month - 1, 11))];
  return `${monthString} ${year}`;
};

export const getCalendarData = (monthNumber: number, year: number) => {
  const monthDays = getMonthDays(monthNumber, year);
  const monthFirstDay = getMonthFirstDay(monthNumber, year);

  const daysFromPrevMonth = monthFirstDay - 1;
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