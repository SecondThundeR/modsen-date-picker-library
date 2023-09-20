import type { Meta, StoryObj } from "@storybook/react";

import CalendarHeader from "./CalendarHeader";

const meta: Meta<typeof CalendarHeader> = {
  title: "Component/CalendarHeader",
  component: CalendarHeader,
  argTypes: {
    title: {
      name: "Title",
      type: "string",
      description: "Title of calendar element",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CalendarHeader>;

export const Primary: Story = {
  args: {
    title: "November 2022",
  },
};
