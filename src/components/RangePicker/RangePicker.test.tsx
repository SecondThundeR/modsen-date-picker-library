import React from "react";
import { render } from "@testing-library/react";

import RangePicker from "./RangePicker";

describe("RangePicker", () => {
  it("should render correctly", () => {
    const { getByText } = render(<RangePicker />);

    expect(getByText("Start range date")).toBeInTheDocument();
    expect(getByText("End range date")).toBeInTheDocument();
  });
});
