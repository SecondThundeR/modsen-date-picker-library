import React, { memo } from "react";

import { Button } from "./Button";
import { FooterButtonProps } from "./interfaces";

const FooterButton = memo(function FooterButton({
  title,
  onClick,
}: FooterButtonProps) {
  return <Button onClick={onClick}>{title}</Button>;
});

export default FooterButton;
