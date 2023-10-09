import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { withMondayFirst, withTodos, withWeekends } from "@/hocs";

import DatePicker from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Component/DatePicker",
  component: DatePicker,
  argTypes: {
    title: {
      name: "Title",
      defaultValue: "Date picker",
      description: "Title of the date picker",
    },
    startDate: {
      name: "Start date",
      defaultValue: new Date(),
      description: "Start date of the range",
    },
    endDate: {
      name: "End date",
      defaultValue: new Date(),
      description: "End date of the range",
    },
    startRange: {
      name: "Start range",
      description: "Start date of the range",
      defaultValue: null,
    },
    isPickingStart: {
      name: "Is picking start",
      description: "Defines is picking date for start range",
      type: "boolean",
      defaultValue: false,
    },
    endRange: {
      name: "End range",
      description: "End date of the range",
      defaultValue: null,
    },
    isPickingEnd: {
      name: "Is picking end",
      description: "Defines is picking date for end range",
      type: "boolean",
      defaultValue: false,
    },
    displayWeekends: {
      name: "Display weekends",
      description: "Display weekends with different color",
      type: "boolean",
      defaultValue: true,
    },
    isSundayFirst: {
      name: "Is Sunday first",
      description: "Is Sunday first day of the week",
      type: "boolean",
      defaultValue: true,
    },
    isTodosEnabled: {
      name: "Is todos enabled",
      description: "Allows user to use todos",
      type: "boolean",
      defaultValue: false,
    },
    holidays: {
      name: "Holidays data",
      description: "Defines data for days, which defined as holidays",
      defaultValue: {},
    },
    holidayCountry: {
      name: "Holidays country",
      description: "Defines country for holidays, fetched with API",
    },
    holidayYear: {
      name: "Holidays year",
      description: "Defines year for holidays, fetched with API",
    },
    onChange: {
      name: "On change",
      description: "Callback, which will be called on date change",
    },
  },
  args: {
    holidays: null,
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {};

const DatePickerWithWeekends = withWeekends(DatePicker);
export const WithWeekendsHOC: Story = {
  render: () => <DatePickerWithWeekends />,
};

export const WithHolidays: Story = {
  args: {
    holidays: { [new Date().getMonth() + 1]: [2, 10, 18, 19, 20, 30] },
  },
};

export const WithHolidaysApi: Story = {
  args: {
    holidayCountry: "BY",
    holidayYear: 2022,
  },
};

const DatePickerWithMondayFirst = withMondayFirst(DatePicker);
export const WithMondayFirstHOC: Story = {
  render: () => <DatePickerWithMondayFirst />,
};

const DatePickerWithTodos = withTodos(DatePicker);
export const WithTodosHOC: Story = {
  render: () => <DatePickerWithTodos />,
};
