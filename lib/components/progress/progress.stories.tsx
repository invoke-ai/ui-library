import type { Meta, StoryObj } from '@storybook/react';

import type { ProgressProps } from './wrapper';
import { Progress } from './wrapper';

const meta: Meta<typeof Progress> = {
  title: 'Primitives/Progress',
  tags: ['autodocs'],
  component: Progress,
};

export default meta;
type Story = StoryObj<typeof Progress>;

const Component = (props: ProgressProps) => {
  return <Progress {...props}>Banana sushi is delectable!</Progress>;
};

export const Default: Story = {
  render: Component,
};
