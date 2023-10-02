import styled from "styled-components";

export const Wrapper = styled.div<{ $removeBottomBorder?: boolean }>`
  display: flex;
  width: fit-content;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  border-bottom-left-radius: ${(props) =>
    props.$removeBottomBorder ? 0 : "8px"};
  border-bottom-right-radius: ${(props) =>
    props.$removeBottomBorder ? 0 : "8px"};
  border-bottom: ${(props) => props.$removeBottomBorder && "none"};
`;
