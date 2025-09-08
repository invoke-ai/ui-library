import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import type { CompositeNumberInputProps } from './composite-number-input';
import { CompositeNumberInput } from './composite-number-input';

const meta: Meta<typeof CompositeNumberInput> = {
  title: 'Primitives/CompositeNumberInput',
  tags: ['autodocs'],
  component: CompositeNumberInput,
};

export default meta;
type Story = StoryObj<typeof CompositeNumberInput>;

const constrainValue = (v: number) => Math.round(v / 8) * 8;

const Component = (props: CompositeNumberInputProps) => {
  const [value, setValue] = useState(1024);
  return (
    <CompositeNumberInput
      defaultValue={1024}
      {...props}
      min={64}
      max={4096}
      step={64}
      fineStep={8}
      value={value}
      onChange={setValue}
      constrainValue={constrainValue}
      allowMath
    />
  );
};

export const Default: Story = {
  render: Component,
  args: { fineStep: 0.1 },
};

export const Integer: Story = {
  render: Component,
};
