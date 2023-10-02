import { HolidayAPIResponse } from "@/features/api/interfaces";

import { Holidays } from "./calendar";

const ONE_MONTH = 1000 * 60 * 60 * 24 * 30;

export function validateResponseData(
  responseData: unknown,
): responseData is HolidayAPIResponse {
  if (typeof responseData !== "object" || responseData === null) return false;
  const { status, holidays } = responseData as HolidayAPIResponse;
  if (typeof status !== "number" || !Array.isArray(holidays)) return false;
  return true;
}

export function transformResponseData({
  holidays,
}: HolidayAPIResponse): Holidays {
  return holidays.reduce((holidaysData, holidayDate) => {
    const [_year, month, day] = holidayDate.date.split("-");
    const formattedMonth = String(Number(month));
    holidaysData[formattedMonth] = [
      ...(holidaysData[formattedMonth] || []),
      Number(day),
    ];
    return holidaysData;
  }, {} as Holidays);
}

export function isHolidaysExpired(lastUpdated: number): boolean {
  return Date.now() - lastUpdated > ONE_MONTH;
}
