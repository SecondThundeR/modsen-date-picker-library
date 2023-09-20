import type { Meta, StoryObj } from "@storybook/react";

import ClearButton from "./ClearButton";

const meta: Meta<typeof ClearButton> = {
  title: "Component/Button",
  component: ClearButton,
};

export default meta;
type Story = StoryObj<typeof ClearButton>;

export const Primary: Story = {};
