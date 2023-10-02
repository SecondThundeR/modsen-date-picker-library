import { HolidayAPIResponse } from "@/features/api/interfaces";

import { Holidays } from "./calendar";

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

