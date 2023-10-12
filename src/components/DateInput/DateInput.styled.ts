import styled from "styled-components";

import {
  DATE_INPUT_STYLE,
  FLEXBOX_STYLE,
  FONT_FAMILY,
  FONT_STYLE,
  FONT_WEIGHT_MAP,
  LINE_HEIGHT,
  MARGIN_RESET,
} from "@/constants/style";

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
