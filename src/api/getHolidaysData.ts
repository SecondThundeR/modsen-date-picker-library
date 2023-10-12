import { HolidayCountries } from "@/api/interfaces";
import { HOLIDAYS_API_ENDPOINT } from "@/constants/endpoints";
import { transformResponseData, validateResponseData } from "@/utils/api";

async function getHolidaysData(year: number, holidayCountry: HolidayCountries) {
  const key = process.env.HOLIDAYS_API_KEY;
  if (!key) throw new Error("HOLIDAYS_API_KEY is not defined");

  const url = new URL(HOLIDAYS_API_ENDPOINT);

  url.searchParams.append("country", holidayCountry);
  url.searchParams.append("year", year.toString());
  url.searchParams.append("key", key);

  const response = await fetch(url);

  if (!response.ok || response.status !== 200)
    throw new Error(`HTTP error! status: ${response.status}`);

  const data = (await response.json()) as unknown;

  if (!validateResponseData(data))
    throw new Error("Invalid response data from API");

  return transformResponseData(data);
}

export default getHolidaysData;
