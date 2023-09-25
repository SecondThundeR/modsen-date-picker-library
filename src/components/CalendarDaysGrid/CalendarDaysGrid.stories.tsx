import type { Meta, StoryObj } from "@storybook/react";

import CalendarDaysGrid from "./CalendarDaysGrid";

const meta: Meta<typeof CalendarDaysGrid> = {
  title: "Component/CalendarDaysGrid",
  component: CalendarDaysGrid,
  argTypes: {
    days: {
      name: "Days array",
      description: "Array of days number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CalendarDaysGrid>;

export const Primary: Story = {
  args: {
    // Make array from 1 to 31 without array
    days: [
      "30",
      "31",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "1",
      "2",
      "3",
    ],
  },
};
