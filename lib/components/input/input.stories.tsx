import type { Meta, StoryObj } from '@storybook/react';

import type { InputProps } from './input';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Primitives/Input',
  tags: ['autodocs'],
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

const Component = (props: InputProps) => {
  return <Input {...props} />;
};

export const Default: Story = {
  render: Component,
};
