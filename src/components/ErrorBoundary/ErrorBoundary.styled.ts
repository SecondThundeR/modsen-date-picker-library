import styled from "styled-components";

import {
  ERROR_BOUNDARY_STYLE,
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
  gap: ${ERROR_BOUNDARY_STYLE.gap};
  align-items: ${FLEXBOX_STYLE.alignCenter};
`;

export const Title = styled.h1`
  margin: ${MARGIN_RESET};
  font-family: ${FONT_FAMILY};
  font-size: ${ERROR_BOUNDARY_STYLE.titleSize};
  font-style: ${FONT_STYLE};
  font-weight: ${FONT_WEIGHT_MAP.semiBold};
  line-height: ${LINE_HEIGHT};
`;

export const Message = styled.p`
  color: ${ERROR_BOUNDARY_STYLE.messageColor};
  font-family: ${FONT_FAMILY};
`;
