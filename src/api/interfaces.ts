export type HolidayCountries = "BY" | "US" | "PL" | "RU" | "UA" | "GB" | "CA";

export interface HolidayAPIResponse {
  status: number;
  holidays: {
    date: string;
  }[];
}
