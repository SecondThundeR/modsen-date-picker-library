import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CalendarWeekRow from "./CalendarWeekRow";

const meta: Meta<typeof CalendarWeekRow> = {
  title: "Component/CalendarWeekRow",
  component: CalendarWeekRow,
};

export default meta;
type Story = StoryObj<typeof CalendarWeekRow>;

export const Primary: Story = {
  render: () => (
    <CalendarWeekRow
      items={[
        {
          value: "1",
        },
        {
          value: "2",
        },
        {
          value: "3",
        },
        {
          value: "4",
        },
        {
          value: "5",
        },
        {
          value: "6",
        },
        {
          value: "7",
        },
      ]}
    />
  ),
};

export const SelectedItem: Story = {
  render: () => (
    <CalendarWeekRow
      items={[
        {
          value: "1",
        },
        {
          value: "2",
        },
        {
          value: "3",
          isSelected: true,
        },
        {
          value: "4",
        },
        {
          value: "5",
        },
        {
          value: "6",
        },
        {
          value: "7",
        },
      ]}
    />
  ),
};

export const DisabledItem: Story = {
  render: () => (
    <CalendarWeekRow
      items={[
        {
          value: "1",
        },
        {
          value: "2",
        },
        {
          value: "3",
          isDisabled: true,
        },
        {
          value: "4",
        },
        {
          value: "5",
        },
        {
          value: "6",
        },
        {
          value: "7",
        },
      ]}
    />
  ),
};

export const RangeItems: Story = {
  render: () => (
    <CalendarWeekRow
      items={[
        {
          value: "1",
        },
        {
          value: "2",
        },
        {
          value: "3",
          rangeState: "start",
        },
        {
          value: "4",
          rangeState: "between",
        },
        {
          value: "5",
          rangeState: "between",
        },
        {
          value: "6",
          rangeState: "end",
        },
        {
          value: "7",
        },
      ]}
    />
  ),
};
