import React from "react";
import { render } from "@testing-library/react";

import CalendarWeekHeader from "./CalendarWeekHeader";

describe("CalendarWeekHeader", () => {
  it("should render the correct number of buttons", () => {
    const { getAllByRole } = render(<CalendarWeekHeader />);
    const buttons = getAllByRole("button");

    expect(buttons).toHaveLength(7);
  });

  it("should render the correct button titles when isSundayFirst is true", () => {
    const { getByText } = render(<CalendarWeekHeader isSundayFirst={true} />);

    expect(getByText("Su")).toBeInTheDocument();
    expect(getByText("Mo")).toBeInTheDocument();
    expect(getByText("Tu")).toBeInTheDocument();
    expect(getByText("We")).toBeInTheDocument();
    expect(getByText("Th")).toBeInTheDocument();
    expect(getByText("Fr")).toBeInTheDocument();
    expect(getByText("Sa")).toBeInTheDocument();
  });

  it("should render the correct button titles when isSundayFirst is false", () => {
    const { getByText } = render(<CalendarWeekHeader isSundayFirst={false} />);

    expect(getByText("Mo")).toBeInTheDocument();
    expect(getByText("Tu")).toBeInTheDocument();
    expect(getByText("We")).toBeInTheDocument();
    expect(getByText("Th")).toBeInTheDocument();
    expect(getByText("Fr")).toBeInTheDocument();
    expect(getByText("Sa")).toBeInTheDocument();
    expect(getByText("Su")).toBeInTheDocument();
  });
});
