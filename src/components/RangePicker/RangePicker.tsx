import React, { memo } from "react";

import DatePicker from "@/components/DatePicker";
import { useRangePicker } from "@/hooks";

import { RangePickerProps } from "./interfaces";
import { Wrapper } from "./RangePicker.styled";

const RangePicker = memo(function RangePicker({
  startDate,
  endDate,
  holidays,
  isSundayFirst,
  displayWeekends,
  isTodosEnabled,
}: RangePickerProps) {
  const {
    values: { startRange, endRange },
    actions: { onUpdate },
  } = useRangePicker();

  return (
    <Wrapper>
      <DatePicker
        title="Start range date"
        startDate={startDate}
        isPickingStart
        endDate={endDate}
        holidays={holidays}
        startRange={startRange}
        endRange={endRange}
        isSundayFirst={isSundayFirst}
        displayWeekends={displayWeekends}
        isTodosEnabled={isTodosEnabled}
        onChange={onUpdate}
      />
      <DatePicker
        title="End range date"
        startDate={startDate}
        endDate={endDate}
        isPickingEnd
        holidays={holidays}
        startRange={startRange}
        endRange={endRange}
        isSundayFirst={isSundayFirst}
        displayWeekends={displayWeekends}
        isTodosEnabled={isTodosEnabled}
        onChange={onUpdate}
      />
    </Wrapper>
  );
});

export default RangePicker;
