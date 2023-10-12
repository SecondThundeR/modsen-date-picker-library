import React from "react";
import { render } from "@testing-library/react";

import { INPUT_STYLE } from "@/constants/style";

import Input from "./Input";

describe("Input", () => {
  it("should render with isError set to false", () => {
    const { getByTestId } = render(<Input />);
    const input = getByTestId("input");
    const inputWrapper = getByTestId("input-wrapper");

    expect(input).toHaveStyleRule("color", INPUT_STYLE.color.regular);
    expect(inputWrapper).toHaveStyleRule(
      "border",
      `1px solid ${INPUT_STYLE.color.outline}`,
    );
  });
});
