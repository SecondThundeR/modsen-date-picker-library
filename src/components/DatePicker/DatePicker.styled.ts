import styled from "styled-components";

import { DATE_PICKER_WRAPPER_GAP, FLEXBOX_STYLE } from "@/constants/style";

export const Wrapper = styled.div`
  display: ${FLEXBOX_STYLE.display};
  flex-direction: ${FLEXBOX_STYLE.direction.column};
  gap: ${DATE_PICKER_WRAPPER_GAP};
`;
