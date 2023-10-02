import { useCallback, useEffect, useState } from "react";

import { getHolidaysData } from "@/features";
import useLocalStorage from "@/hooks/useLocalStorage";
import { isHolidaysExpired } from "@/utils/api";
import { Holidays } from "@/utils/calendar";

import { HolidaysLocalStorage, UseHolidaysAPIOptions } from "./interfaces";

function useHolidaysAPI({ holidayCountry, year }: UseHolidaysAPIOptions) {
  const [holidays, setHolidays] = useState<Holidays>({});
  const { onGetData, onLocalUpdate, onLocalDelete } =
    useLocalStorage<HolidaysLocalStorage>(`holidays-${holidayCountry}-${year}`);

  const fetchHolidays = useCallback(async () => {
    const data = await getHolidaysData(year, holidayCountry);

    setHolidays(data);
    onLocalUpdate({ holidays: data, lastUpdated: Date.now() });
  }, [holidayCountry, onLocalUpdate, year]);

  useEffect(() => {
    const data = onGetData();
    if (data && !isHolidaysExpired(data.lastUpdated))
      return setHolidays(data.holidays);

    onLocalDelete();
    fetchHolidays().catch(console.error);
  }, [fetchHolidays, holidayCountry, onGetData, onLocalDelete, year]);

  return holidays;
}

export default useHolidaysAPI;
