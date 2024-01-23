import type { Meta, StoryObj } from '@storybook/react';
import { FaBoltLightning } from 'react-icons/fa6';

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

const Component = () => {
  return (
    <>
      <IconButton aria-label="label" variant="solid" icon={<FaBoltLightning />} />
      <IconButton aria-label="label" variant="ghost" icon={<FaBoltLightning />} />
      <IconButton aria-label="label" variant="link" icon={<FaBoltLightning />} />
      <IconButton aria-label="label" variant="outline" icon={<FaBoltLightning />} />
      <IconButton aria-label="label" variant="promptOverlay" icon={<FaBoltLightning />} />
      <IconButton aria-label="label" variant="promptOverlay" colorScheme="error" icon={<FaBoltLightning />} />
    </>
  );
};

export const Default: Story = {
  render: Component,
};
