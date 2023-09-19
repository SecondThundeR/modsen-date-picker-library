import React from "react";

import { StyledButton } from "./Button.styled";

interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  if (text.length === 0) return null;
  return <StyledButton>{text}</StyledButton>;
}

export default Button;
