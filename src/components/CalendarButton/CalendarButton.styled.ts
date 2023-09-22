import { rgba } from "polished";
import styled from "styled-components";

import { RangeState } from "./interfaces";

export const Item = styled.button<{ $selected?: boolean; $range?: RangeState }>`
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: ${(props) => (props.$range === "between" ? "0" : "8px")};
  background-color: ${(props) =>
    props.$selected || props.$range !== undefined
      ? rgba(
          47,
          128,
          237,
          props.$range === "start" ? 0.6 : props.$range === "between" ? 0.1 : 1,
        )
      : "transparent"};
  color: ${(props) =>
    props.$selected || props.$range === "start" || props.$range === "end"
      ? "white"
      : props.$range === "between"
      ? "#2F80ED"
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

  &:disabled {
    color: #aaa;
  }

  &:hover {
    background-color: ${(props) => (props.$selected ? "#1261ca" : "#f1f1f1")};
  }

  &:active {
    transform: scale(0.98);
  }
`;
