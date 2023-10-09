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
    onTitle: {
      name: "onTitle",
      type: "function",
      description: "Function to call when user clicked on title",
    },
    onPrevClick: {
      name: "onPrevClick",
      type: "function",
      description: "Function to call when the prev button is clicked",
    },
    onNextClick: {
      name: "onNextClick",
      type: "function",
      description: "Function to call when the next button is clicked",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CalendarHeader>;

export const Primary: Story = {
  args: {
    title: "November 2022",
    onTitle: () => console.log("Title clicked"),
    onPrevClick: () => console.log("Prev clicked"),
    onNextClick: () => console.log("Next clicked"),
  },
};
