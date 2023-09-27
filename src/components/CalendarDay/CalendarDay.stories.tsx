import type { Meta, StoryObj } from "@storybook/react";

import { getNextDay } from "@/utils/calendar";

import CalendarDay from "./CalendarDay";

const meta: Meta<typeof CalendarDay> = {
  title: "Component/CalendarDay",
  component: CalendarDay,
  argTypes: {
    date: {
      name: "Date",
      description: "Date of calendar day",
    },
    startRange: {
      name: "Start range",
      description: "Start date of the range",
    },
    endRange: {
      name: "End range",
      description: "End date of the range",
    },
    selectedDate: {
      name: "Selected date",
      description: "Selected date to check against",
    },
    selectedMonth: {
      name: "Selected month",
      description: "Current selected month of calendar",
      type: "number",
    },
    displayWeekends: {
      name: "Display weekends",
      description: "Display weekends with different color",
      type: "boolean",
    },
    holidays: {
      name: "Holidays data",
      description: "Defines data for days, which defined as holidays",
    },
    onChange: {
      name: "On change",
      description: "Function that will be called on change",
      type: "function",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CalendarDay>;

export const Primary: Story = {
  args: {
    date: new Date(),
    startRange: null,
    endRange: null,
    selectedDate: getNextDay(),
    selectedMonth: new Date().getMonth() + 1,
    displayWeekends: true,
    holidays: null,
    onChange(changedDate) {
      console.log(changedDate);
    },
  },
};

export const Selected: Story = {
  args: {
    date: new Date(),
    startRange: null,
    endRange: null,
    selectedDate: new Date(),
    selectedMonth: new Date().getMonth() + 1,
    displayWeekends: true,
    holidays: null,
    onChange(changedDate) {
      console.log(changedDate);
    },
  },
};

export const Holiday: Story = {
  args: {
    date: new Date(),
    startRange: null,
    endRange: null,
    selectedDate: getNextDay(),
    selectedMonth: new Date().getMonth() + 1,
    displayWeekends: true,
    holidays: { [new Date().getMonth() + 1]: [new Date().getDate()] },
    onChange(changedDate) {
      console.log(changedDate);
    },
  },
};

export const RangeStart: Story = {
  args: {
    date: new Date(),
    startRange: new Date(),
    endRange: null,
    selectedDate: new Date(),
    selectedMonth: new Date().getMonth() + 1,
    displayWeekends: true,
    holidays: null,
    onChange(changedDate) {
      console.log(changedDate);
    },
  },
};

const startRange = new Date();
startRange.setDate(startRange.getDate() - 1);
const endRange = new Date();
endRange.setDate(endRange.getDate() + 1);

export const RangeBetween: Story = {
  args: {
    date: new Date(),
    startRange: startRange,
    endRange: endRange,
    selectedMonth: new Date().getMonth() + 1,
    displayWeekends: true,
    holidays: null,
    onChange(changedDate) {
      console.log(changedDate);
    },
  },
};

export const RangeEnd: Story = {
  args: {
    date: new Date(),
    startRange: null,
    endRange: new Date(),
    selectedDate: new Date(),
    selectedMonth: new Date().getMonth() + 1,
    displayWeekends: true,
    holidays: null,
    onChange(changedDate) {
      console.log(changedDate);
    },
  },
};
