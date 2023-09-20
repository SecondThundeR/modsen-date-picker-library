import React from "react";
import { render } from "@testing-library/react";

import ClearButton from "./ClearButton";

describe("Button", () => {
  test("renders the ClearButton component", () => {
    render(<ClearButton />);
  });
});
