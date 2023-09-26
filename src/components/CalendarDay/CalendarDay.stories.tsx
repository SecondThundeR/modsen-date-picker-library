import type { Meta, StoryObj } from "@storybook/react";

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
    selectedDate: new Date(),
    selectedMonth: new Date().getMonth() + 1,
    displayWeekends: true,
    onChange(changedDate) {
      console.log(changedDate);
    },
  },
};
