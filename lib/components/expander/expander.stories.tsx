import type { Meta, StoryObj } from '@storybook/react';

import type { ExpanderProps } from './expander';
import { Expander } from './expander';

const meta: Meta<typeof Expander> = {
  title: 'Primitives/Expander',
  tags: ['autodocs'],
  component: Expander,
};

export default meta;
type Story = StoryObj<typeof Expander>;

const Component = (props: ExpanderProps) => {
  return <Expander {...props}>Invoke</Expander>;
};

export const Default: Story = {
  render: Component,
};
