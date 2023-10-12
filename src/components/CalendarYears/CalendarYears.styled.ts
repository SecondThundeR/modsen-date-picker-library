import styled from "styled-components";

import { ALTERNATIVE_GRID_STYLE } from "@/constants/style";

export const Grid = styled.div`
  display: ${ALTERNATIVE_GRID_STYLE.display};
  grid-template-columns: ${ALTERNATIVE_GRID_STYLE.columns};
  grid-template-rows: ${ALTERNATIVE_GRID_STYLE.rows};
`;
