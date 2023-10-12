import styled from "styled-components";

import {
  BUTTON_PADDING,
  CURSOR_POINTER,
  FLEXBOX_STYLE,
  FONT_FAMILY,
  FONT_SIZE_REGULAR,
  FONT_STYLE,
  FONT_WEIGHT_MAP,
  LINE_HEIGHT,
  NO_BORDER,
  TRANSFORM_ACTIVE_SCALE,
  TRANSITION_TIME,
} from "@/constants/style";
import {
  getButtonBackgroundColor,
  getButtonHoverBackgroundColor,
  getButtonRadius,
  getButtonSize,
  getButtonTextColor,
} from "@/utils/style";

import { CalendarButtonStyleProps } from "./interfaces";

export const Item = styled.button<CalendarButtonStyleProps>`
  cursor: ${CURSOR_POINTER};
  width: ${({ $unlockedSize }) => getButtonSize($unlockedSize)};
  height: ${({ $unlockedSize }) => getButtonSize($unlockedSize)};
  display: ${FLEXBOX_STYLE.display};
  justify-content: ${FLEXBOX_STYLE.justifyCenter};
  align-items: ${FLEXBOX_STYLE.alignCenter};
  padding: ${BUTTON_PADDING};
  border-radius: ${({ $range }) => getButtonRadius($range === "between")};
  background-color: ${({ $isSelected, $range }) =>
    getButtonBackgroundColor({ $isSelected, $range })};
  color: ${(props) => getButtonTextColor(props)};
  border: ${NO_BORDER};
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_REGULAR};
  font-style: ${FONT_STYLE};
  font-weight: ${FONT_WEIGHT_MAP.semiBold};
  line-height: ${LINE_HEIGHT};
  border-top-right-radius: ${({ $range }) =>
    getButtonRadius($range === "start" || $range === "between")};
  border-bottom-right-radius: ${({ $range }) =>
    getButtonRadius($range === "start" || $range === "between")};
  border-top-left-radius: ${({ $range }) =>
    getButtonRadius($range === "end" || $range === "between")};
  border-bottom-left-radius: ${({ $range }) =>
    getButtonRadius($range === "end" || $range === "between")};
  transition: ${TRANSITION_TIME};

  &:hover {
    background-color: ${({ $isSelected }) =>
      getButtonHoverBackgroundColor($isSelected)};
  }

  &:active {
    transform: ${TRANSFORM_ACTIVE_SCALE};
  }
`;
