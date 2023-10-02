import React from "react";
import { render } from "@testing-library/react";

import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary", () => {
  it("renders the child component if there is no error", () => {
    const ChildComponent = () => <div>Child component</div>;
    const { getByText } = render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>,
    );
    const childComponent = getByText("Child component");
    expect(childComponent).toBeInTheDocument();
  });

  it("renders an error message if there is an error", () => {
    const ChildComponent = () => {
      throw new Error("Test error");
    };
    const { getByText, getByTestId } = render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>,
    );

    expect(getByTestId("error-boundary")).toBeInTheDocument();

    const errorTitle = getByText("Something went wrong :c");
    const errorMessage = getByText("Error details: Test error");
    expect(errorTitle).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
  });
});
