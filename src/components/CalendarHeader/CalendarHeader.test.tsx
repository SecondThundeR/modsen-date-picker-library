import React from "react";
import { fireEvent, render } from "@testing-library/react";

import CalendarHeader from "./CalendarHeader";

describe("CalendarHeader", () => {
  const props = {
    title: "Test Title",
    onPrevClick: jest.fn(),
    onNextClick: jest.fn(),
  };

  it("renders the title correctly", () => {
    const { getByText } = render(<CalendarHeader {...props} />);

    expect(getByText(props.title)).toBeInTheDocument();
  });

  it("calls onPrevClick when the previous button is clicked", () => {
    const { getByTestId } = render(<CalendarHeader {...props} />);
    fireEvent.click(getByTestId("prev-button"));

    expect(props.onPrevClick).toHaveBeenCalled();
  });

  it("calls onNextClick when the next button is clicked", () => {
    const { getByTestId } = render(<CalendarHeader {...props} />);
    fireEvent.click(getByTestId("next-button"));

    expect(props.onNextClick).toHaveBeenCalled();
  });
});
