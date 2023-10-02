import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  display: flex;
  padding: 10px 0px;
  justify-content: center;
  border-radius: 0px 0px 8px 8px;
  border: 1px solid #e1e1e1;
  background: #fff;
  color: #333;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  transition: 0.2s;

  &:hover {
    background-color: #f6f6f6;
  }

  &:active {
    transform: scale(0.98);
  }
`;
