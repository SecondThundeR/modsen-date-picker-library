export const THIS_YEAR = new Date().getFullYear();
export const THIS_MONTH = new Date().getMonth() + 1;
export const MONTHS_WITH_30_DAYS = [4, 6, 9, 11];

export const DEFAULT_DAY = 1;
export const DEFAULT_MONTH = 1;
export const DEFAULT_YEAR = 1970;

export const DATE_REGEX =
  /^(0?[1-9]|[12][0-9]|3[01])[./](0?[1-9]|1[012])[./]\d{4}$/;
export const MONTH_REGEX = /^(0?[1-9]|1[012])[./]\d{4}$/;
export const YEAR_REGEX = /^\d{4}$/;

export const WEEK_DAYS = {
  Sunday: "Su",
  Monday: "Mo",
  Tuesday: "Tu",
  Wednesday: "We",
  Thursday: "Th",
  Friday: "Fr",
  Saturday: "Sa",
} as const;

export const CALENDAR_MONTHS = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
} as const;

export const CALENDAR_WEEKS = 6;
export const CALENDAR_NON_REGULAR_GRID_SIZE = 12;
export const FEBRUARY_MONTH_NUMBER = 2;
