import styled from "styled-components";

import {
  BOX_SIZING,
  FLEXBOX_STYLE,
  FONT_FAMILY,
  FONT_STYLE,
  FONT_WEIGHT_MAP,
  FULL_HEIGHT,
  INPUT_STYLE,
  LINE_HEIGHT,
  NO_BORDER,
} from "@/constants/style";
import { getInputBorderColor, getInputTextColor } from "@/utils/style";

import { InputStyleProps } from "./interfaces";

export const Wrapper = styled.input<InputStyleProps>`
  height: ${FULL_HEIGHT};
  box-sizing: ${BOX_SIZING};
  border: ${NO_BORDER};
  outline: ${NO_BORDER};
  flex: ${INPUT_STYLE.flexLength};
  color: ${({ $isError }) => getInputTextColor($isError)};
  font-family: ${FONT_FAMILY};
  font-size: ${INPUT_STYLE.fontSize};
  font-style: ${FONT_STYLE};
  font-weight: ${FONT_WEIGHT_MAP.regular};
  line-height: ${LINE_HEIGHT};

  &::placeholder {
    color: ${INPUT_STYLE.color.placeholder};
  }
`;

export const InputWrapper = styled.div<InputStyleProps>`
  width: ${INPUT_STYLE.width};
  display: ${FLEXBOX_STYLE.display};
  gap: ${INPUT_STYLE.gap};
  align-items: ${FLEXBOX_STYLE.alignCenter};
  padding: ${INPUT_STYLE.padding};
  border: 1px solid ${({ $isError }) => getInputBorderColor($isError)};
  border-radius: ${INPUT_STYLE.radius};
`;
