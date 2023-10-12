import {
  DEFAULT_DAY,
  DEFAULT_MONTH,
  DEFAULT_YEAR,
} from "@/constants/defaultValues";
import { DATE_REGEX } from "@/constants/regexRules";

import { isDate } from "./calendar";

export interface DateState {
  month: number;
  year: number;
}

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

export const parseDateString = (dateString: string) => {
  const splittedString = dateString.split(/[./]/).map(Number);
  let day = DEFAULT_DAY,
    month = DEFAULT_MONTH,
    year = DEFAULT_YEAR;

  switch (splittedString.length) {
    case 1:
      year = splittedString[0];
      break;
    case 2:
      month = splittedString[0];
      year = splittedString[1];
      break;
    case 3:
      day = splittedString[0];
      month = splittedString[1];
      year = splittedString[2];
      break;
  }

  return new Date(year, month - 1, day);
};

export const isValidDate = (dateString: string) => {
  return DATE_REGEX.test(dateString);
};

export const isYearsEqual = (date1: Date | null, date2: Date | null) => {
  if (!date1 || !date2) return false;

  return date1.getFullYear() === date2.getFullYear();
};

export const isMonthsEqual = (date1: Date | null, date2: Date | null) => {
  if (!date1 || !date2) return false;

  return (
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

export const isFullDatesEqual = (date1: Date | null, date2: Date | null) => {
  if (!date1 || !date2) return false;

  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
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
