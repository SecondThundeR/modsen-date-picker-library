import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { withHolidays } from "@/hocs/withHolidays";
import { withMondayFirst } from "@/hocs/withMondayFirst";
import { withWeekends } from "@/hocs/withWeekends";

import DatePicker from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Component/DatePicker",
  component: DatePicker,
  argTypes: {
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
