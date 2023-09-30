import { renderHook } from "@testing-library/react";

import useDateInput from "./useDateInput";

describe("useDateInput", () => {
  test("should use regular as default type", () => {
    const { result } = renderHook(() =>
      useDateInput({
        dateString: "01/01/2022",
        startDate: new Date("2022-01-01"),
        endDate: new Date("2022-12-31"),
        onDateChange: jest.fn(),
        onClearClick: jest.fn(),
      }),
    );

    expect(result.current.value).toBe("01/01/2022");
  });
});
