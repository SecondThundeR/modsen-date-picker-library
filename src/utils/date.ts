import {
  DATE_REGEX,
  DEFAULT_DAY,
  DEFAULT_MONTH,
  DEFAULT_YEAR,
} from "@/constants/date";

export const formatDateForValue = (dateString: string) => {
  return dateString;
};

export const isValidDate = (dateString: string) => {
  return DATE_REGEX.test(dateString);
};

export const parseDate = (dateString: string) => {
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

export const isInRange = (date: Date, startDate?: Date, endDate?: Date) => {
  if (!startDate || !endDate) return true;

  return date >= startDate && date <= endDate;
};

export const isDatesYearsEqual = (date1: Date | null, date2: Date | null) => {
  if (!date1 || !date2) return false;

  return date1.getFullYear() === date2.getFullYear();
};

export const isDatesMonthsEqual = (date1: Date | null, date2: Date | null) => {
  if (!date1 || !date2) return false;

  return (
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

export const isDatesEqual = (date1: Date | null, date2: Date | null) => {
  if (!date1 || !date2) return false;

  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

export const getMonthDateToUpdate = (date: Date, selectedDate: Date) => {
  const dateToUpdate = new Date(date);
  dateToUpdate.setDate(selectedDate.getDate());
  return dateToUpdate;
};

export const getYearDateToUpdate = (date: Date, selectedDate: Date) => {
  const dateToUpdate = new Date(date);
  dateToUpdate.setDate(selectedDate.getDate());
  dateToUpdate.setMonth(selectedDate.getMonth());
  return dateToUpdate;
};

export const getDefaultStartDate = () => {
  const today = new Date();
  const year = today.getFullYear() - 10;
  return new Date(year, 0, 1);
};

export const getDefaultEndDate = () => {
  const today = new Date();
  const year = today.getFullYear() + 10;
  return new Date(year, 11, 31);
};
