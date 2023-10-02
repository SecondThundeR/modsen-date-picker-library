import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  padding: 0 8px;
  border: 1px solid #dddddd;
`;

export const Title = styled.h1<{ $isChecked?: boolean }>`
  width: 100%;
  margin: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: ${({ $isChecked }) =>
    $isChecked ? "line-through" : "none"};
`;
