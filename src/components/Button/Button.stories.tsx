import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Component/Button",
  component: Button,
  argTypes: {
    text: {
      name: "Text",
      type: "string",
      defaultValue: "Hello!",
      description: "Text of button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: "Hello!",
  },
};
