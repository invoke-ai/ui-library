import type { Meta, StoryObj } from '@storybook/react';

import type { TextProps } from '.';
import { Text } from '.';

const meta: Meta<typeof Text> = {
  title: 'Primitives/Text',
  tags: ['autodocs'],
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

const Component = (props: TextProps) => {
  return <Text {...props}>Banana sushi is delectable!</Text>;
};

export const Default: Story = {
  render: Component,
};
