import styled from "styled-components";

import {
  CALENDAR_WRAPPER_STYLE,
  FIT_WIDTH,
  FLEXBOX_STYLE,
} from "@/constants/style";
import { getCalendarWrapperRadius } from "@/utils/style";

import { CalendarWrapperStyleProps } from "./interfaces";

export const Wrapper = styled.div<CalendarWrapperStyleProps>`
  display: ${FLEXBOX_STYLE.display};
  width: ${FIT_WIDTH};
  flex-direction: ${FLEXBOX_STYLE.direction.column};
  padding: ${CALENDAR_WRAPPER_STYLE.padding};
  border: ${CALENDAR_WRAPPER_STYLE.border};
  border-radius: ${CALENDAR_WRAPPER_STYLE.radius.regular};
  border-bottom-left-radius: ${({ $removeBottomBorder }) =>
    getCalendarWrapperRadius($removeBottomBorder)};
  border-bottom-right-radius: ${({ $removeBottomBorder }) =>
    getCalendarWrapperRadius($removeBottomBorder)};
  border-bottom: ${({ $removeBottomBorder }) =>
    getCalendarWrapperRadius($removeBottomBorder, true)};
`;
