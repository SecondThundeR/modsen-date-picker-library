import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CalendarWrapper from "./CalendarWrapper";

const meta: Meta<typeof CalendarWrapper> = {
  title: "Component/CalendarWrapper",
  component: CalendarWrapper,
};

export default meta;
type Story = StoryObj<typeof CalendarWrapper>;

export const Primary: Story = {
  render: () => (
    <CalendarWrapper>
      <h1>Some text in wrapper!</h1>
    </CalendarWrapper>
  ),
};

export const WithoutBottomBorder: Story = {
  render: () => (
    <CalendarWrapper removeBottomBorder>
      <h1>Some text in wrapper!</h1>
    </CalendarWrapper>
  ),
};
