export const isValidValue = (value: string) => {
  return value.match(/^[0-9|/]*$/);
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
