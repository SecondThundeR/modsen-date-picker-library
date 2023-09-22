import type { Meta, StoryObj } from "@storybook/react";

import FooterButton from "./FooterButton";

const meta: Meta<typeof FooterButton> = {
  title: "Component/FooterButton",
  component: FooterButton,
  argTypes: {
    title: {
      name: "Button title",
      description: "Title of a button",
      type: "string",
      defaultValue: "Click me!",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FooterButton>;

export const Primary: Story = {};
