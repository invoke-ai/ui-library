import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button/button';
import type { TooltipProps } from './tooltip';
import { Tooltip } from './tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Primitives/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    label: 'My Tooltip',
    placement: 'top',
    hasArrow: true,
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

const render = (props: TooltipProps) => (
  <Tooltip {...props}>
    <Button>Invoke</Button>
  </Tooltip>
);

export const Default: Story = {
  render,
};

export const WithoutArrow: Story = {
  render,
  args: {
    hasArrow: false,
  },
};
