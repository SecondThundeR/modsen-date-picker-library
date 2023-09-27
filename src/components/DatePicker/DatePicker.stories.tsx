import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { withHolidays, withMondayFirst, withWeekends } from "@/hocs";

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
    holidays: {
      name: "Holidays data",
      description: "Defines data for days, which defined as holidays",
      defaultValue: {},
    },
    onChange: {
      name: "On change",
      description: "Callback, which will be called on date change",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {
  args: {
    holidays: { [new Date().getMonth() + 1]: [3, 6, 8, 10, 23, 30] },
  },
};

const DatePickerWithWeekends = withWeekends(DatePicker);

export const WithWeekendsHOC: Story = {
  render: () => <DatePickerWithWeekends />,
};

const DatePickerWithHolidays = withHolidays(DatePicker, {
  [new Date().getMonth() + 1]: [2, 10, 18, 19, 20, 30],
});

export const WithHolidaysHOC: Story = {
  render: () => <DatePickerWithHolidays />,
};

const DatePickerWithMondayFirst = withMondayFirst(DatePicker);

export const WithMondayFirstHOC: Story = {
  render: () => <DatePickerWithMondayFirst />,
};
