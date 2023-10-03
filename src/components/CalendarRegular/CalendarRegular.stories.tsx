import type { Meta, StoryObj } from "@storybook/react";

import { getDefaultEndDate, getDefaultStartDate } from "@/utils/date";

import CalendarRegular from "./CalendarRegular";

const meta: Meta<typeof CalendarRegular> = {
  title: "Component/CalendarRegular",
  component: CalendarRegular,
  argTypes: {
    date: {
      name: "Date",
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
    isSundayFirst: true,
    displayWeekends: true,
    isTodosEnabled: false,
    holidays: null,
    onChange: (date) => console.log("Selected:", date),
  },
};

export default meta;
type Story = StoryObj<typeof CalendarRegular>;

export const Primary: Story = {};
