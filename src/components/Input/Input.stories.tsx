import React, { ChangeEventHandler, useCallback, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Component/Input",
  component: Input,
  argTypes: {
    type: {
      name: "Type",
      description: "Type of input",
      type: "string",
      defaultValue: "text",
    },
    value: {
      name: "Value",
      description: "Value of input",
      type: "string",
      defaultValue: undefined,
    },
    placeholder: {
      name: "Placeholder",
      description: "Placeholder of input",
      type: "string",
      defaultValue: undefined,
    },
    maxLength: {
      name: "Max length",
      description: "Max length of input",
      type: "number",
      defaultValue: undefined,
    },
    onChange: {
      name: "On change",
      description: "Event handler for input's onChange",
      type: "function",
    },
  },
};

export interface InputProps {
  startDate?: Date;
  endDate?: Date;
}

export default meta;
type Story = StoryObj<typeof Input>;

const InputExample = () => {
  const [value, setValue] = useState("");

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setValue(event.target.value);
    },
    [],
  );

  return (
    <Input
      type="text"
      value={value}
      placeholder="Enter value"
      maxLength={18}
      onChange={onChange}
    />
  );
};

export const Primary: Story = {
  render: () => <InputExample />,
};
