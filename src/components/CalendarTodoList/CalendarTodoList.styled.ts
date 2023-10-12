import styled from "styled-components";

import {
  DEFAULT_OPACITY,
  FLEXBOX_STYLE,
  FONT_FAMILY,
  FONT_SIZE_HINT,
  FONT_SIZE_REGULAR,
  FONT_STYLE,
  FONT_WEIGHT_MAP,
  FULL_WIDTH,
  LINE_HEIGHT,
  MARGIN_RESET,
  TODO_LIST_INPUT_STYLE,
  TODO_LIST_INPUT_WRAPPER_GAP,
  TODO_LIST_TITLE_SIZE,
  TODO_LIST_WRAPPER_CONTAINER,
  TODO_LIST_WRAPPER_LIST,
} from "@/constants/style";

export const Wrapper = styled.div`
  width: ${TODO_LIST_WRAPPER_CONTAINER.width};
  display: ${FLEXBOX_STYLE.display};
  flex-direction: ${FLEXBOX_STYLE.direction.column};
  align-items: ${FLEXBOX_STYLE.alignCenter};
  padding: ${TODO_LIST_WRAPPER_CONTAINER.padding};
  border: ${TODO_LIST_WRAPPER_CONTAINER.border};
  border-radius: ${TODO_LIST_WRAPPER_CONTAINER.radius};
  gap: ${TODO_LIST_WRAPPER_CONTAINER.gap};
  background-color: ${TODO_LIST_WRAPPER_CONTAINER.backgroundColor};
  margin: ${TODO_LIST_WRAPPER_CONTAINER.margin};
`;

export const ListWrapper = styled.div`
  width: ${TODO_LIST_WRAPPER_LIST.width};
  max-height: ${TODO_LIST_WRAPPER_LIST.maxHeight};
  display: ${FLEXBOX_STYLE.display};
  flex-direction: ${FLEXBOX_STYLE.direction.column};
  gap: ${TODO_LIST_WRAPPER_LIST.gap};
  overflow-y: ${TODO_LIST_WRAPPER_LIST.overflowY};
`;

export const Title = styled.h1`
  margin: ${MARGIN_RESET};
  font-family: ${FONT_FAMILY};
  font-size: ${TODO_LIST_TITLE_SIZE};
  font-style: ${FONT_STYLE};
  font-weight: ${FONT_WEIGHT_MAP.semiBold};
  line-height: ${LINE_HEIGHT};
`;

export const Hint = styled.p`
  margin: ${MARGIN_RESET};
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_REGULAR};
  font-style: ${FONT_STYLE};
  font-weight: ${FONT_WEIGHT_MAP.semiBold};
  line-height: ${LINE_HEIGHT};
`;

export const InputWrapper = styled.div`
  width: ${FULL_WIDTH};
  display: ${FLEXBOX_STYLE.display};
  gap: ${TODO_LIST_INPUT_WRAPPER_GAP};
`;

export const Input = styled.input`
  display: ${FLEXBOX_STYLE.display};
  width: ${FULL_WIDTH};
  flex: ${TODO_LIST_INPUT_STYLE.flexLength};
  padding: ${TODO_LIST_INPUT_STYLE.padding};
  border: ${TODO_LIST_INPUT_STYLE.border};
  border-radius: ${TODO_LIST_INPUT_STYLE.radius};
`;

export const FooterHint = styled.p`
  margin: ${MARGIN_RESET};
  font-family: ${FONT_FAMILY};
  font-size: ${FONT_SIZE_HINT};
  font-style: ${FONT_STYLE};
  font-weight: ${FONT_WEIGHT_MAP.regular};
  line-height: ${LINE_HEIGHT};
  opacity: ${DEFAULT_OPACITY};
`;
