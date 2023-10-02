import React from "react";
import { createPortal } from "react-dom";

import { Wrapper } from "./Backdrop.styled";
import { BackdropProps } from "./interfaces";

function Backdrop({ children, closeModal }: BackdropProps) {
  return createPortal(
    <Wrapper data-testid="backdrop" onClick={closeModal}>
      {children}
    </Wrapper>,
    document.body,
  );
}

export default Backdrop;
