import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
  withHolidays,
  withHolidaysAPI,
  withMondayFirst,
  withTodos,
  withWeekends,
} from "@/hocs";

import RangePicker from "./RangePicker";

const meta: Meta<typeof RangePicker> = {
  title: "Component/RangePicker",
  component: RangePicker,
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
    },
    isSundayFirst: {
      name: "Is Sunday first",
      description: "Is Sunday first day of the week",
      type: "boolean",
    },
    isTodosEnabled: {
      name: "Is todos enabled",
      description: "Allows user to use todos",
      type: "boolean",
    },
    holidays: {
      name: "Holidays data",
      description: "Defines data for days, which defined as holidays",
    },
  },
  args: {
    holidays: null,
  },
};

export default meta;
type Story = StoryObj<typeof RangePicker>;

export const Primary: Story = {};

const RangePickerWithWeekends = withWeekends(RangePicker);
export const WithWeekendsHOC: Story = {
  render: () => <RangePickerWithWeekends />,
};

const RangePickerWithHolidays = withHolidays(RangePicker, {
  [new Date().getMonth() + 1]: [2, 10, 18, 19, 20, 30],
});
export const WithHolidaysHOC: Story = {
  render: () => <RangePickerWithHolidays />,
};

const RangePickerWithHolidaysAPI = withHolidaysAPI(RangePicker, {
  holidayCountry: "BY",
  year: 2022,
});
export const WithHolidaysApiHOC: Story = {
  render: () => <RangePickerWithHolidaysAPI />,
};

const RangePickerWithMondayFirst = withMondayFirst(RangePicker);
export const WithMondayFirstHOC: Story = {
  render: () => <RangePickerWithMondayFirst />,
};

const RangePickerWithTodos = withTodos(RangePicker);
export const WithTodosHOC: Story = {
  render: () => <RangePickerWithTodos />,
};
