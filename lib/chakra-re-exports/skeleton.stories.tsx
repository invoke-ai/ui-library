import type { Meta, StoryObj } from '@storybook/react';

import type { SkeletonProps } from '.';
import { Skeleton } from '.';

const meta: Meta<typeof Skeleton> = {
  title: 'Primitives/Skeleton',
  tags: ['autodocs'],
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

const Component = (props: SkeletonProps) => {
  return <Skeleton {...props}>Banana sushi is delectable!</Skeleton>;
};

export const Default: Story = {
  render: Component,
};
