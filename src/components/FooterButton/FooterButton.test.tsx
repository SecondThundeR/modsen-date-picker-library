import React from "react";
import { render } from "@testing-library/react";

import FooterButton from "./FooterButton";

describe("Button", () => {
  test("renders the FooterButton component", () => {
    render(<FooterButton title="Click me!" />);
  });
});
