import styled from "styled-components";

import {
  BOX_SIZING,
  FLEXBOX_STYLE,
  FONT_FAMILY,
  FONT_SIZE_TITLE,
  FONT_STYLE,
  FONT_WEIGHT_MAP,
  FULL_WIDTH,
  LINE_HEIGHT,
  MARGIN_RESET,
  TODO_ITEM_WRAPPER,
} from "@/constants/style";
import { getTodoItemTitleDecoration } from "@/utils/style";

export const Wrapper = styled.div`
  box-sizing: ${BOX_SIZING};
  width: ${FULL_WIDTH};
  display: ${FLEXBOX_STYLE.display};
  align-items: ${FLEXBOX_STYLE.alignCenter};
  gap: ${TODO_ITEM_WRAPPER.gap};
  border-radius: ${TODO_ITEM_WRAPPER.radius};
  padding: ${TODO_ITEM_WRAPPER.padding};
  border: ${TODO_ITEM_WRAPPER.border};
`;

export const Title = styled.h1<{ $isChecked?: boolean }>`
  width: ${FULL_WIDTH};
  margin: ${MARGIN_RESET};
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_TITLE};
  font-style: ${FONT_STYLE};
  font-weight: ${FONT_WEIGHT_MAP.semiBold};
  line-height: ${LINE_HEIGHT};
  text-decoration: ${({ $isChecked }) =>
    getTodoItemTitleDecoration($isChecked)};
`;
