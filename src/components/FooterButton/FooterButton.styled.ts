import styled from "styled-components";

import {
  CURSOR_POINTER,
  FLEXBOX_STYLE,
  FONT_FAMILY,
  FONT_STYLE,
  FONT_WEIGHT_MAP,
  FOOTER_BUTTON_STYLE,
  FULL_WIDTH,
  LINE_HEIGHT,
  TRANSFORM_ACTIVE_SCALE,
  TRANSITION_TIME,
} from "@/constants/style";

export const Button = styled.button`
  cursor: ${CURSOR_POINTER};
  width: ${FULL_WIDTH};
  display: ${FLEXBOX_STYLE.display};
  padding: ${FOOTER_BUTTON_STYLE.padding};
  justify-content: ${FLEXBOX_STYLE.justifyCenter};
  border: ${FOOTER_BUTTON_STYLE.border};
  border-radius: ${FOOTER_BUTTON_STYLE.radius};
  background: ${FOOTER_BUTTON_STYLE.backgroundColor};
  color: ${FOOTER_BUTTON_STYLE.textColor};
  font-family: ${FONT_FAMILY};
  font-size: ${FOOTER_BUTTON_STYLE.fontSize};
  font-style: ${FONT_STYLE};
  font-weight: ${FONT_WEIGHT_MAP.semiBold};
  line-height: ${LINE_HEIGHT};
  transition: ${TRANSITION_TIME};

  &:hover {
    background-color: #f6f6f6;
  }

  &:active {
    transform: ${TRANSFORM_ACTIVE_SCALE};
  }
`;
