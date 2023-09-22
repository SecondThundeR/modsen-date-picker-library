import React, { memo } from "react";

import { Button } from "./FooterButton.styled";
import { FooterButtonProps } from "./interfaces";

const FooterButton = memo(function FooterButton({ title }: FooterButtonProps) {
  return <Button>{title}</Button>;
});

export default FooterButton;
