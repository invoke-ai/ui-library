import type { Meta, StoryObj } from '@storybook/react';

import { InvButton } from '../inv-button/inv-button';
import type { InvTooltipProps } from './inv-tooltip';
import { InvTooltip } from './inv-tooltip';

const meta: Meta<typeof InvTooltip> = {
  title: 'Primitives/InvTooltip',
  component: InvTooltip,
  tags: ['autodocs'],
  args: {
    label: 'My Tooltip',
    placement: 'top',
    hasArrow: true,
  },
};

export default meta;
type Story = StoryObj<typeof InvTooltip>;

const render = (props: InvTooltipProps) => (
  <InvTooltip {...props}>
    <InvButton>Invoke</InvButton>
  </InvTooltip>
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
