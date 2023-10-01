import { CalendarType } from "@/components/Calendar/interfaces";

export const isValidValue = (value: string) => {
  return value.match(/^[0-9|/]*$/);
};

export const getInputMaxLength = (type: CalendarType) =>
  type === "regular" ? 10 : type === "month" ? 7 : 4;
