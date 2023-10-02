import { act, renderHook } from "@testing-library/react";

import { getHolidaysData } from "@/features";
import { useLocalStorage } from "@/hooks";

import useHolidaysAPI from "./useHolidaysAPI";

jest.mock("@/features");
jest.mock("@/hooks");

const getHolidaysDataMock = getHolidaysData as jest.MockedFunction<
  typeof getHolidaysData
>;

const useLocalStorageMock = useLocalStorage as jest.MockedFunction<
  typeof useLocalStorage
>;

describe("useHolidaysAPI", () => {
  const onLocalUpdate = jest.fn();
  const onLocalDelete = jest.fn();
  const holidayCountry = "BY";
  const year = 2022;
  const holidaysData = {
    "1": [1, 7],
    "2": [23],
    "3": [8],
    "5": [1, 9],
    "7": [3],
    "11": [7],
    "12": [25, 31],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return holidays data if it exists in localStorage", () => {
    const onGetData = jest.fn().mockReturnValue({
      holidays: holidaysData,
      lastUpdated: Date.now(),
    });
    getHolidaysDataMock.mockResolvedValue(holidaysData);
    useLocalStorageMock.mockReturnValue({
      onGetData,
      onLocalUpdate,
      onLocalDelete,
    });

    const { result } = renderHook(() =>
      useHolidaysAPI({ holidayCountry, year }),
    );

    expect(result.current).toEqual(holidaysData);
  });

  it("should fetch holidays data and save to local storage when data is not present", async () => {
    const onGetData = jest.fn().mockReturnValue(undefined);
    getHolidaysDataMock.mockResolvedValue(holidaysData);
    useLocalStorageMock.mockReturnValue({
      onGetData,
      onLocalUpdate,
      onLocalDelete,
    });

    const { result } = renderHook(() =>
      useHolidaysAPI({ holidayCountry, year }),
    );

    expect(result.current).toEqual({});

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current).toEqual(holidaysData);
  });
});
