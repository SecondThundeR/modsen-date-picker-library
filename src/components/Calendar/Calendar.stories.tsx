import type { Meta, StoryObj } from "@storybook/react";

import { getDefaultEndDate, getDefaultStartDate } from "@/utils/date";

import Calendar from "./Calendar";

const meta: Meta<typeof Calendar> = {
  title: "Component/Calendar",
  component: Calendar,
  argTypes: {
    date: {
      name: "Date",
      defaultValue: new Date(),
      description: "Date to be displayed",
    },
    startDate: {
      name: "Start date",
      description: "Start date of the range",
    },
    endDate: {
      name: "End date",
      description: "End date of the range",
    },
    isSundayFirst: {
      name: "Is Sunday first",
      description: "Is Sunday first day of the week",
      type: "boolean",
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
    hasClearButton: {
      name: "Has clear button",
      type: "boolean",
      defaultValue: false,
      description: "State of clear button visibility",
    },
    onChange: {
      name: "On change",
      description: "Called when date is changed",
      type: "function",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {
  args: {
    date: new Date(),
    startDate: getDefaultStartDate(),
    endDate: getDefaultEndDate(),
    isSundayFirst: true,
    displayWeekends: true,
    holidays: null,
    hasClearButton: false,
    onChange: (date) => console.log("Selected:", date),
  },
};
