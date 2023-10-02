import type { Meta, StoryObj } from "@storybook/react";

import CalendarButton from "./CalendarButton";

const meta: Meta<typeof CalendarButton> = {
  title: "Component/CalendarButton",
  component: CalendarButton,
  argTypes: {
    title: {
      name: "Title",
      description: "Title of an item",
      type: "string",
    },
    isSelected: {
      name: "Selection status",
      description: "Selection status of item",
      type: "boolean",
      defaultValue: false,
    },
    isDisabled: {
      name: "Disabled status",
      description: "Disabled status of item",
      type: "boolean",
      defaultValue: false,
    },
    rangeState: {
      name: "Range state",
      description: "State of button range (Start, between, end)",
      type: "string",
      defaultValue: undefined,
    },
  },
};

export default meta;
type Story = StoryObj<typeof CalendarButton>;

export const Primary: Story = {
  args: {
    title: "1",
  },
};

export const Disabled: Story = {
  args: {
    title: "1",
    isDisabled: true,
  },
};

export const Selected: Story = {
  args: {
    title: "1",
    isSelected: true,
  },
};

export const RangeStart: Story = {
  args: {
    title: "1",
    rangeState: "start",
  },
};

export const RangeBetween: Story = {
  args: {
    title: "1",
    rangeState: "between",
  },
};

export const RangeEnd: Story = {
  args: {
    title: "1",
    rangeState: "end",
  },
};
