import React, { memo } from "react";

import DatePicker from "@/components/DatePicker";
import { useRangePicker } from "@/hooks";
import { getDefaultEndDate, getDefaultStartDate } from "@/utils/date";

import { RangePickerProps } from "./interfaces";
import { Wrapper } from "./RangePicker.styled";

const RangePicker = memo(function RangePicker({
  startDate = getDefaultStartDate(),
  endDate = getDefaultEndDate(),
  holidays = null,
  isSundayFirst = true,
  displayWeekends = false,
}: RangePickerProps) {
  const {
    values: { startRange, endRange },
    actions: { updateStartRange, updateEndRange },
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
        onChange={updateStartRange}
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
        onChange={updateEndRange}
      />
    </Wrapper>
  );
});

export default RangePicker;
