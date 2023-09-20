import React from "react";

import { Title, TitleWrapper, Wrapper } from "./CalendarWeekHeader.styled";

const WEEKS_DATA = [
  { id: "sunday", title: "Su" },
  { id: "monday", title: "Mo" },
  { id: "tuesday", title: "Tu" },
  { id: "wednesday", title: "We" },
  { id: "thursday", title: "Th" },
  { id: "friday", title: "Fr" },
  { id: "saturday", title: "Sa" },
];

function CalendarWeekHeader() {
  return (
    <Wrapper>
      {WEEKS_DATA.map((item) => (
        <TitleWrapper key={item.id}>
          <Title>{item.title}</Title>
        </TitleWrapper>
      ))}
    </Wrapper>
  );
}

export default CalendarWeekHeader;
