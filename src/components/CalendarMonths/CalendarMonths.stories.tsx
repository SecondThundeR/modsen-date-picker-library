import type { Meta, StoryObj } from "@storybook/react";

import { getDefaultEndDate, getDefaultStartDate } from "@/utils/date";

import CalendarMonths from "./CalendarMonths";

const meta: Meta<typeof CalendarMonths> = {
  title: "Component/CalendarMonths",
  component: CalendarMonths,
  argTypes: {
    date: {
      name: "Date",
      defaultValue: new Date(),
      description: "Date to be displayed",
    },
    dateState: {
      name: "Date state",
      description: "Object with state of date",
    },
    startDate: {
      name: "Start date",
      description: "Start date of the range",
    },
    endDate: {
      name: "End date",
      description: "End date of the range",
    },
    startRange: {
      name: "Start range",
      description: "Start date of the range",
    },
    endRange: {
      name: "End range",
      description: "End date of the range",
    },
    onChange: {
      name: "On change",
      description: "Called when date is changed",
      type: "function",
    },
  },
  args: {
    date: new Date(),
    dateState: {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    },
    startDate: getDefaultStartDate(),
    endDate: getDefaultEndDate(),
    startRange: null,
    endRange: null,
    onChange: (date) => console.log("Selected:", date),
  },
};

export default meta;
type Story = StoryObj<typeof CalendarMonths>;

export const Primary: Story = {};
