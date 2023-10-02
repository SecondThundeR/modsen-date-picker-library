import type { Meta, StoryObj } from "@storybook/react";

import CalendarWeekHeader from "./CalendarWeekHeader";

const meta: Meta<typeof CalendarWeekHeader> = {
  title: "Component/CalendarWeekHeader",
  component: CalendarWeekHeader,
  argTypes: {
    isSundayFirst: {
      name: "Is Sunday First",
      description: "Controls is Sunday first day of week or not",
      defaultValue: true,
      type: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CalendarWeekHeader>;

export const SundayFirst: Story = {};
export const MondayFirst: Story = {
  args: {
    isSundayFirst: false,
  },
};
