import React from "react";
import { fireEvent, render } from "@testing-library/react";

import Backdrop from "./Backdrop";

describe("Backdrop", () => {
  it("should render the children", () => {
    const { getByTestId } = render(
      <Backdrop closeModal={jest.fn()}>
        <div>Test content</div>
      </Backdrop>,
    );
    const content = getByTestId("backdrop").firstChild;

    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent("Test content");
  });

  it("should calls the closeModal function when clicked", () => {
    const closeModal = jest.fn();
    const { getByTestId } = render(<Backdrop closeModal={closeModal} />);
    const backdrop = getByTestId("backdrop");

    fireEvent.click(backdrop);
    expect(closeModal).toHaveBeenCalled();
  });
});
