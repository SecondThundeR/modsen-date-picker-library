import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { withMondayFirst, withTodos, withWeekends } from "@/hocs";

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

export const RangePickerWithHolidays: Story = {
  args: {
    holidays: { [new Date().getMonth() + 1]: [2, 10, 18, 19, 20, 30] },
  },
};

export const RangePickerWithHolidaysAPI: Story = {
  args: {
    holidayCountry: "BY",
    holidayYear: 2022,
  },
};

const RangePickerWithMondayFirst = withMondayFirst(RangePicker);
export const WithMondayFirstHOC: Story = {
  render: () => <RangePickerWithMondayFirst />,
};

const RangePickerWithTodos = withTodos(RangePicker);
export const WithTodosHOC: Story = {
  render: () => <RangePickerWithTodos />,
};
