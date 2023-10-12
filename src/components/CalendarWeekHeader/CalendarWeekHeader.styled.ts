import styled from "styled-components";

import { FIT_WIDTH, FLEXBOX_STYLE } from "@/constants/style";

export const Wrapper = styled.div`
  display: ${FLEXBOX_STYLE.display};
  width: ${FIT_WIDTH};
  align-items: ${FLEXBOX_STYLE.alignStart};
`;
