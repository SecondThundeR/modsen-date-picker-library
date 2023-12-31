import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  padding: 5px 0px;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  cursor: pointer;
  color: #000;
  margin: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  flex: 2;
  text-align: center;
  transition: 0.3s;

  &:hover {
    opacity: 0.6;
  }
`;
