import type { Meta, StoryObj } from "@storybook/react";

import { getDefaultEndDate, getDefaultStartDate } from "@/utils/date";

import Calendar from "./Calendar";

const meta: Meta<typeof Calendar> = {
  title: "Component/Calendar",
  component: Calendar,
  argTypes: {
    hasClearButton: {
      name: "Has clear button",
      type: "boolean",
      defaultValue: false,
      description: "State of clear button visibility",
    },
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
      defaultValue: true,
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
    hasClearButton: false,
    date: new Date(),
    startDate: getDefaultStartDate(),
    endDate: getDefaultEndDate(),
    onChange: (date) => console.log("Selected:", date),
  },
};
