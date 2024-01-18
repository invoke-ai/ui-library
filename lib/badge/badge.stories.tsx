import type { Meta, StoryObj } from '@storybook/react';

import type { BadgeProps } from './badge';
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'Primitives/Badge',
  tags: ['autodocs'],
  component: Badge,
  args: {
    colorScheme: 'base',
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

const Component = (props: BadgeProps) => {
  return <Badge {...props}>Invoke</Badge>;
};

export const Default: Story = {
  render: Component,
};
