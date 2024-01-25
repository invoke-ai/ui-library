import type { Meta, StoryObj } from '@storybook/react';

import type { SwitchProps } from '.';
import { Switch } from '.';

const meta: Meta<typeof Switch> = {
  title: 'Primitives/Switch',
  tags: ['autodocs'],
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

const Component = (props: SwitchProps) => {
  return <Switch {...props} />;
};

export const Default: Story = {
  render: Component,
};
