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
    type: {
      name: "Calendar type",
      description: "Type of calendar",
      type: "string",
      defaultValue: "regular",
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
    isTodosEnabled: {
      name: "Is todos enabled",
      description: "Allow user to use todos",
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
  args: {
    date: new Date(),
    startDate: getDefaultStartDate(),
    endDate: getDefaultEndDate(),
    startRange: null,
    endRange: null,
    isSundayFirst: true,
    displayWeekends: true,
    isTodosEnabled: false,
    holidays: null,
    hasClearButton: false,
    onChange: (date) => console.log("Selected:", date),
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {};

export const Months: Story = {
  args: {
    type: "month",
  },
};

export const Years: Story = {
  args: {
    type: "year",
  },
};

export const WithTodos: Story = {
  args: {
    isTodosEnabled: true,
  },
};

const startRange = new Date();
startRange.setDate(startRange.getDate() - 5);
const endRange = new Date();
endRange.setDate(endRange.getDate() + 5);
export const WithRange: Story = {
  args: {
    startRange,
    endRange,
  },
};
