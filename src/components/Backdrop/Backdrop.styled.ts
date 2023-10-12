import styled from "styled-components";

import {
  BACKDROP_WRAPPER_STYLE,
  FLEXBOX_STYLE,
  FULL_HEIGHT,
  FULL_WIDTH,
} from "@/constants/style";

export const Wrapper = styled.div`
  position: ${BACKDROP_WRAPPER_STYLE.position};
  top: ${BACKDROP_WRAPPER_STYLE.top};
  left: ${BACKDROP_WRAPPER_STYLE.left};
  width: ${FULL_WIDTH};
  height: ${FULL_HEIGHT};
  background-color: ${BACKDROP_WRAPPER_STYLE.backgroundColor};
  backdrop-filter: ${BACKDROP_WRAPPER_STYLE.blur};
  display: ${FLEXBOX_STYLE.display};
  justify-content: ${FLEXBOX_STYLE.justifyCenter};
  align-items: ${FLEXBOX_STYLE.alignCenter};
  z-index: ${BACKDROP_WRAPPER_STYLE.zIndex};
`;
