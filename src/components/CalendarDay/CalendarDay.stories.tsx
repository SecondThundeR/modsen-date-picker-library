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
    selectedDate: getNextDay(),
    selectedMonth: new Date().getMonth() + 1,
    displayWeekends: true,
    holidays: { [new Date().getMonth() + 1]: [new Date().getDate()] },
    onChange(changedDate) {
      console.log(changedDate);
    },
  },
};
