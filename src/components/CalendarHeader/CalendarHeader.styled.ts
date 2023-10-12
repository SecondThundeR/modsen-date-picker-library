import styled from "styled-components";

import {
  CURSOR_POINTER,
  DEFAULT_OPACITY,
  FLEXBOX_STYLE,
  FONT_FAMILY,
  FONT_SIZE_TITLE,
  FONT_STYLE,
  FONT_WEIGHT_MAP,
  HEADER_TITLE_STYLE,
  LINE_HEIGHT,
  MARGIN_RESET,
  TRANSITION_TIME,
} from "@/constants/style";

export const Header = styled.div`
  display: ${FLEXBOX_STYLE.display};
  padding: ${HEADER_TITLE_STYLE.padding};
  align-items: ${FLEXBOX_STYLE.alignCenter};
`;

export const HeaderTitle = styled.h1`
  cursor: ${CURSOR_POINTER};
  color: ${HEADER_TITLE_STYLE.color};
  margin: ${MARGIN_RESET};
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_TITLE};
  font-style: ${FONT_STYLE};
  font-weight: ${FONT_WEIGHT_MAP.bold};
  line-height: ${LINE_HEIGHT};
  flex: ${HEADER_TITLE_STYLE.flexLength};
  text-align: ${HEADER_TITLE_STYLE.align};
  transition: ${TRANSITION_TIME};

  &:hover {
    opacity: ${DEFAULT_OPACITY};
  }
`;
