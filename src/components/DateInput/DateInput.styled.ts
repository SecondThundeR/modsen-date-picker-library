import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.h1`
  margin: 0;
  color: #333;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ErrorMessage = styled.p`
  margin: 0;
  color: #ff0000;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const InputWrapper = styled.div<{ $isError?: boolean }>`
  width: 250px;
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid ${({ $isError }) => ($isError ? "#ff0000" : "#dddddd")};
  border-radius: 8px;
`;

export const Input = styled.input`
  height: 100%;
  box-sizing: border-box;
  border: none;
  outline: none;
  flex: 2;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::placeholder {
    color: #bbbbbb;
  }
`;
