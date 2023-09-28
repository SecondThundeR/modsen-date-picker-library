import type { Meta, StoryObj } from "@storybook/react";

import CalendarTodoItem from "./CalendarTodoItem";

const meta: Meta<typeof CalendarTodoItem> = {
  title: "Component/CalendarTodoItem",
  component: CalendarTodoItem,
  argTypes: {
    todo: {
      name: "Todo",
      description: "Object with todo data",
    },
    onDone: {
      name: "onDone",
      description: "Function to call when todo is being toggled as done",
      type: "function",
    },
    onDelete: {
      name: "onDelete",
      description: "Function to call when todo is being delete",
      type: "function",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CalendarTodoItem>;

export const Primary: Story = {
  args: {
    todo: {
      id: "1",
      value: "Todo 1",
      done: false,
    },
    onDelete(id) {
      console.log("Delete clicked", id);
    },
    onDone(id, doneState) {
      console.log("Done clicked", id, doneState);
    },
  },
};

export const Checked: Story = {
  args: {
    todo: {
      id: "1",
      value: "Todo 1 (Checked)",
      done: true,
    },
    onDelete(id) {
      console.log("Delete clicked", id);
    },
    onDone(id, doneState) {
      console.log("Done clicked", id, doneState);
    },
  },
};
