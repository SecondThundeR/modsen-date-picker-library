import { renderHook } from "@testing-library/react";

import useDateInput from "./useDateInput";

describe("useDateInput", () => {
  it("should use regular as default type", () => {
    const { result } = renderHook(() =>
      useDateInput({
        dateString: "01/01/2022",
        startDate: new Date("01/01/2022"),
        endDate: new Date("12/31/2022"),
        onDateChange: jest.fn(),
        onClearClick: jest.fn(),
      }),
    );

    expect(result.current.value).toBe("01/01/2022");
  });
});
