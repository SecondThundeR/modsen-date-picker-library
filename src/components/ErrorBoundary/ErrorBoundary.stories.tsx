import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import ErrorBoundary from "./ErrorBoundary";

const meta: Meta<typeof ErrorBoundary> = {
  title: "Component/ErrorBoundary",
  component: ErrorBoundary,
  argTypes: {
    children: {
      name: "Children",
      description: "Children to render",
      defaultValue: undefined,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorBoundary>;

const RegularComponent = () => <h1>Hello, world!</h1>;
const ComponentWithError = () => {
  throw new Error("Test error");
};

export const Primary: Story = {
  render: () => (
    <ErrorBoundary>
      <RegularComponent />
    </ErrorBoundary>
  ),
};

export const WithError: Story = {
  render: () => (
    <ErrorBoundary>
      <ComponentWithError />
    </ErrorBoundary>
  ),
};
