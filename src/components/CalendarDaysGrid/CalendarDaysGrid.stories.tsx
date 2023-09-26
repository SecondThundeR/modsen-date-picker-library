import type { Meta, StoryObj } from "@storybook/react";

import { getCalendarData } from "@/utils/calendar";

import CalendarDaysGrid from "./CalendarDaysGrid";

const meta: Meta<typeof CalendarDaysGrid> = {
  title: "Component/CalendarDaysGrid",
  component: CalendarDaysGrid,
  argTypes: {
    currentDate: {
      name: "Current date",
      description: "Current date",
    },
    currentMonth: {
      name: "Current month",
      description: "Current month",
      type: "number",
    },
    datesArray: {
      name: "Dates array",
      description: "Array of dates",
    },
    onChange: {
      name: "On change",
      description: "Function that will be called on change",
      type: "function",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CalendarDaysGrid>;

export const Primary: Story = {
  args: {
    currentDate: new Date(),
    currentMonth: new Date().getMonth() + 1,
    datesArray: getCalendarData(
      new Date().getMonth() + 1,
      new Date().getFullYear(),
      true,
    ),
  },
};
