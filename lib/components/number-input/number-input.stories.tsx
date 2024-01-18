import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import type { CompositeNumberInputProps } from './composite-number-input';
import { CompositeNumberInput } from './composite-number-input';

const meta: Meta<typeof CompositeNumberInput> = {
  title: 'Primitives/CompositeNumberInput',
  tags: ['autodocs'],
  component: CompositeNumberInput,
  args: {
    min: -10,
    max: 10,
    step: 1,
  },
};

export default meta;
type Story = StoryObj<typeof CompositeNumberInput>;

const Component = (props: CompositeNumberInputProps) => {
  const [value, setValue] = useState(0);
  return <CompositeNumberInput {...props} value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: Component,
  args: { fineStep: 0.1 },
};

export const Integer: Story = {
  render: Component,
};
