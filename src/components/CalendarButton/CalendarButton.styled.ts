import { rgba } from "polished";
import styled from "styled-components";

import { CalendarButtonStyleProps } from "./interfaces";

export const Item = styled.button<CalendarButtonStyleProps>`
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: ${(props) => (props.$range === "between" ? "0" : "8px")};
  background-color: ${(props) =>
    props.$isSelected || props.$range !== undefined
      ? rgba(
          47,
          128,
          237,
          props.$range === "start" ? 0.6 : props.$range === "between" ? 0.1 : 1,
        )
      : "transparent"};
  color: ${(props) =>
    props.$isSelected || props.$range === "start" || props.$range === "end"
      ? "white"
      : props.$range === "between"
      ? "#2F80ED"
      : props.$isDisabled
      ? "#aaa"
      : "#333"};
  border: none;
  font-family: Open Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-top-right-radius: ${(props) =>
    props.$range === "start" || props.$range === "between" ? "0px" : "8px"};
  border-bottom-right-radius: ${(props) =>
    props.$range === "start" || props.$range === "between" ? "0px" : "8px"};
  border-top-left-radius: ${(props) =>
    props.$range === "end" || props.$range === "between" ? "0px" : "8px"};
  border-bottom-left-radius: ${(props) =>
    props.$range === "end" || props.$range === "between" ? "0px" : "8px"};
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => (props.$isSelected ? "#1261ca" : "#f1f1f1")};
  }

  &:active {
    transform: scale(0.98);
  }
`;
