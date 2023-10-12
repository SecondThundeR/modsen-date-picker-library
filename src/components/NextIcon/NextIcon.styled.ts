import styled from "styled-components";

import { ICON_STYLE, TRANSITION_TIME } from "@/constants/style";

export const Icon = styled.svg`
  transition: ${TRANSITION_TIME};

  &:hover {
    transform: ${ICON_STYLE.hoverScale};
  }

  &:active {
    transform: ${ICON_STYLE.activeScale};
  }
`;
