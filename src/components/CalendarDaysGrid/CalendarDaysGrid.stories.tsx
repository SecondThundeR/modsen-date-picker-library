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
    startRange: {
      name: "Start range",
      description: "Start date of the range",
    },
    endRange: {
      name: "End range",
      description: "End date of the range",
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
    startRange: null,
    endRange: null,
    displayWeekends: true,
    holidays: null,
    onChange(changedDate) {
      console.log(changedDate);
    },
  },
};

const startRange = new Date();
startRange.setDate(startRange.getDate() - 5);
const endRange = new Date();
endRange.setDate(endRange.getDate() + 5);

export const WithRange: Story = {
  args: {
    currentDate: new Date(),
    currentMonth: new Date().getMonth() + 1,
    datesArray: getCalendarData(
      new Date().getMonth() + 1,
      new Date().getFullYear(),
      true,
    ),
    startRange,
    endRange,
    displayWeekends: true,
    holidays: null,
    onChange(changedDate) {
      console.log(changedDate);
    },
  },
};
