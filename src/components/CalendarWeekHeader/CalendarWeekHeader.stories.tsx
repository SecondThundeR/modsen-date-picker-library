import type { Meta, StoryObj } from "@storybook/react";

import CalendarWeekHeader from "./CalendarWeekHeader";

const meta: Meta<typeof CalendarWeekHeader> = {
  title: "Component/CalendarWeekHeader",
  component: CalendarWeekHeader,
};

export default meta;
type Story = StoryObj<typeof CalendarWeekHeader>;

export const Primary: Story = {};
