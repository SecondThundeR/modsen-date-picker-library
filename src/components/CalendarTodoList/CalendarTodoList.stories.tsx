import type { Meta, StoryObj } from "@storybook/react";

import CalendarTodoList from "./CalendarTodoList";

const meta: Meta<typeof CalendarTodoList> = {
  title: "Component/CalendarTodoList",
  component: CalendarTodoList,
  argTypes: {
    todoDate: {
      name: "Todo date",
      descripion: "Date of button to get todos for",
    },
    closeModal: {
      name: "Close modal",
      description: "Function to close modal",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CalendarTodoList>;

export const Primary: Story = {
  args: {
    todoDate: new Date(),
    closeModal() {
      console.log("Closed modal");
    },
  },
};
