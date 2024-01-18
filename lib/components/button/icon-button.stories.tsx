import type { Meta, StoryObj } from '@storybook/react';
import { FaBoltLightning } from 'react-icons/fa6';

import type { IconButtonProps } from './icon-button';
import { IconButton } from './icon-button';

const meta: Meta<typeof IconButton> = {
  title: 'Primitives/IconButton',
  tags: ['autodocs'],
  component: IconButton,
  args: {
    icon: <FaBoltLightning />,
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

const Component = (props: IconButtonProps) => {
  return <IconButton {...props} />;
};

export const Default: Story = {
  render: Component,
};
