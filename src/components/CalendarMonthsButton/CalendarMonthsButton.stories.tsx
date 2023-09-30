import type { Meta, StoryObj } from "@storybook/react";

import { CALENDAR_MONTHS } from "@/constants/date";
import { getDefaultEndDate, getDefaultStartDate } from "@/utils/date";

import CalendarMonthsButton from "./CalendarMonthsButton";

const currentMonthName = Object.values(CALENDAR_MONTHS)[new Date().getMonth()];

const meta: Meta<typeof CalendarMonthsButton> = {
  title: "Component/CalendarMonthsButton",
  component: CalendarMonthsButton,
  argTypes: {
    title: {
      name: "Button title",
      description: "Title of button to render",
      type: "string",
    },
    date: {
      name: "Date",
      description: "Date to be displayed",
    },
    selectedDate: {
      name: "Selected date",
      description: "Selected date from picker",
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
    title: currentMonthName,
    date: new Date(),
    selectedDate: new Date(),
    startDate: getDefaultStartDate(),
    endDate: getDefaultEndDate(),
    startRange: null,
    endRange: null,
    onChange: (date) => console.log("Selected:", date),
  },
};

export default meta;
type Story = StoryObj<typeof CalendarMonthsButton>;

export const Primary: Story = {};
