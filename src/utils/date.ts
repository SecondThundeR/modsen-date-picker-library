const DATE_REGEX = /^(0?[1-9]|[12][0-9]|3[01])[./](0?[1-9]|1[012])[./]\d{4}$/;

export const isValidDate = (dateString: string) => {
  return DATE_REGEX.test(dateString);
};

export const parseDate = (dateString: string) => {
  const [day, month, year] = dateString.split(/[./]/).map(Number);
  return new Date(year, month - 1, day);
};

export const isInRange = (date: Date, startDate?: Date, endDate?: Date) => {
  if (!startDate || !endDate) return true;

  return date >= startDate && date <= endDate;
};
