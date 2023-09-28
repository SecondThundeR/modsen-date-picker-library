import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Backdrop from "./Backdrop";

const meta: Meta<typeof Backdrop> = {
  title: "Component/Backdrop",
  component: Backdrop,
  argTypes: {
    children: {
      name: "Children",
      description: "The children to display inside the modal",
    },
    closeModal: {
      name: "Close modal",
      description: "Used to close the modal",
      type: "function",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Backdrop>;

export const Primary: Story = {
  args: {
    children: <h1>Hello!</h1>,
    closeModal() {
      console.log("Modal closed");
    },
  },
};
