import type { Meta, StoryObj } from '@storybook/react';

import type { HeadingProps } from '.';
import { Heading } from '.';

const meta: Meta<typeof Heading> = {
  title: 'Primitives/Heading',
  tags: ['autodocs'],
  component: Heading,
};

export default meta;
type Story = StoryObj<typeof Heading>;

const Component = (props: HeadingProps) => {
  return <Heading {...props}>Banana sushi is delectable!</Heading>;
};

export const Default: Story = {
  render: Component,
};
