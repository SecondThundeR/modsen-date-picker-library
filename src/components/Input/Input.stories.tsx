import React, { useCallback, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Component/Input",
  component: Input,
  argTypes: {
    title: {
      name: "Title",
      description: "Title of input",
      type: "string",
      defaultValue: undefined,
    },
    dateString: {
      name: "Date string",
      description: "Value of date for input",
      type: "string",
    },
    startDate: {
      name: "Start date",
      description: "Date for range start",
      type: "string",
      defaultValue: new Date("2021-01-01"),
    },
    endDate: {
      name: "End date",
      description: "Date for range end",
      type: "string",
      defaultValue: new Date("2030-12-31"),
    },
    isCalendarEnabled: {
      name: "Is calendar enabled",
      description: "Controls calendar icon visibility",
      type: "boolean",
      defaultValue: true,
    },
    onDateChange: {
      name: "On date change",
      description: "Event handler for date change",
      type: "function",
    },
    onCalendarClick: {
      name: "On calendar click",
      description: "Event handler for click on calendar icon",
      type: "function",
    },
    onClearClick: {
      name: "On clear click",
      description: "Event handler for click on clear icon",
      type: "function",
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export interface InputProps {
  startDate?: Date;
  endDate?: Date;
}

export default meta;
type Story = StoryObj<typeof Input>;

const InputExample = () => {
  const [date, setDate] = useState(new Date());

  const onDateChange = useCallback(
    (changedDate: Date) => {
      if (changedDate.getTime() === date.getTime()) return;
      setDate(date);
    },
    [date],
  );

  const onClear = useCallback(() => {
    setDate(new Date());
  }, []);

  return (
    <Input
      title="Date"
      dateString={date.toLocaleDateString("en-GB")}
      startDate={new Date("2021-01-01")}
      endDate={new Date("2030-12-31")}
      onDateChange={onDateChange}
      onCalendarClick={() => console.log("Calendar opened!")}
      onClearClick={onClear}
    />
  );
};

export const Primary: Story = {
  render: () => <InputExample />,
};
