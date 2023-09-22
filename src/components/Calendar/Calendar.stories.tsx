import type { Meta, StoryObj } from "@storybook/react";

import Calendar from "./Calendar";

const meta: Meta<typeof Calendar> = {
  title: "Component/Calendar",
  component: Calendar,
  argTypes: {
    hasClearButton: {
      name: "Has clear button",
      type: "boolean",
      defaultValue: false,
      description: "State of clear button visibility",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {
  args: {
    hasClearButton: false,
  },
};
