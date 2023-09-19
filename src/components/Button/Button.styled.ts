import styled from "styled-components";

export const StyledButton = styled.button`
  all: unset;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  background-color: blue;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1.5em;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    background-color: lightblue;
  }

  &:active {
    transform: scale(0.95);
  }
`;
