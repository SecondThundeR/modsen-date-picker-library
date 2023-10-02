import React from "react";
import { render } from "@testing-library/react";

import CalendarWrapper from "./CalendarWrapper";

describe("CalendarWrapper", () => {
  it("should render the children", () => {
    const { getByText } = render(<CalendarWrapper>Test</CalendarWrapper>);
    const child = getByText("Test");

    expect(child).toBeInTheDocument();
  });

  it("should render with a bottom border when removeBottomBorder is false", () => {
    const { getByTestId } = render(<CalendarWrapper />);
    const wrapper = getByTestId("calendar-wrapper");

    expect(wrapper).toHaveStyleRule("border", "1px solid #e1e1e1");
    expect(wrapper).toHaveStyleRule("border-radius', '8px");
  });

  it("should not render with a bottom border when removeBottomBorder is true", () => {
    const { getByTestId } = render(
      <CalendarWrapper removeBottomBorder={true} />,
    );
    const wrapper = getByTestId("calendar-wrapper");

    expect(wrapper).toHaveStyleRule("border-bottom", "none");
    expect(wrapper).toHaveStyleRule("border-bottom-left-radius', '0");
    expect(wrapper).toHaveStyleRule("border-bottom-right-radius', '0");
  });
});
