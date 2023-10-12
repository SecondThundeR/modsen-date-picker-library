import styled from "styled-components";

import {
  BOX_SIZING,
  DATE_INPUT_STYLE,
  FLEXBOX_STYLE,
  FONT_FAMILY,
  FONT_STYLE,
  FONT_WEIGHT_MAP,
  FULL_HEIGHT,
  LINE_HEIGHT,
  MARGIN_RESET,
  NO_BORDER,
} from "@/constants/style";
import { getDateInputBorderColor } from "@/utils/style";

export const Wrapper = styled.div`
  display: ${FLEXBOX_STYLE.display};
  flex-direction: ${FLEXBOX_STYLE.direction.column};
  gap: ${DATE_INPUT_STYLE.wrapperGap};
`;

export const Title = styled.h1`
  margin: ${MARGIN_RESET};
  color: ${DATE_INPUT_STYLE.title.color};
  font-family: ${FONT_FAMILY};
  font-size: ${DATE_INPUT_STYLE.title.fontSize};
  font-style: ${FONT_STYLE};
  font-weight: ${FONT_WEIGHT_MAP.semiBold};
  line-height: ${LINE_HEIGHT};
`;

export const ErrorMessage = styled.p`
  margin: ${MARGIN_RESET};
  color: ${DATE_INPUT_STYLE.errorMessage.color};
  font-family: ${FONT_FAMILY};
  font-size: ${DATE_INPUT_STYLE.errorMessage.fontSize};
  font-style: ${FONT_STYLE};
  font-weight: ${FONT_WEIGHT_MAP.regular};
  line-height: ${LINE_HEIGHT};
`;

export const InputWrapper = styled.div<{ $isError?: boolean }>`
  width: ${DATE_INPUT_STYLE.input.width};
  display: ${FLEXBOX_STYLE.display};
  gap: ${DATE_INPUT_STYLE.input.gap};
  align-items: ${FLEXBOX_STYLE.alignCenter};
  padding: ${DATE_INPUT_STYLE.input.padding};
  border: 1px solid ${({ $isError }) => getDateInputBorderColor($isError)};
  border-radius: ${DATE_INPUT_STYLE.input.radius};
`;

export const Input = styled.input`
  height: ${FULL_HEIGHT};
  box-sizing: ${BOX_SIZING};
  border: ${NO_BORDER};
  outline: ${NO_BORDER};
  flex: ${DATE_INPUT_STYLE.flexLength};
  font-family: ${FONT_FAMILY};
  font-size: ${DATE_INPUT_STYLE.input.fontSize};
  font-style: ${FONT_STYLE};
  font-weight: ${FONT_WEIGHT_MAP.regular};
  line-height: ${LINE_HEIGHT};

  &::placeholder {
    color: ${DATE_INPUT_STYLE.placeholderColor};
  }
`;
