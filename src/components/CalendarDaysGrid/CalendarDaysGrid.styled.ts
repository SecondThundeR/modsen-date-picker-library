import styled from "styled-components";

import { REGULAR_GRID_STYLE } from "@/constants/style";

export const Grid = styled.div`
  display: ${REGULAR_GRID_STYLE.display};
  grid-template-columns: ${REGULAR_GRID_STYLE.columns};
  grid-template-rows: ${REGULAR_GRID_STYLE.rows};
`;
