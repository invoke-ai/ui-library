import type { Meta, StoryObj } from '@storybook/react';

import type { CheckboxProps } from './wrapper';
import { Checkbox } from './wrapper';

const meta: Meta<typeof Checkbox> = {
  title: 'Primitives/Checkbox',
  tags: ['autodocs'],
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const Component = (props: CheckboxProps) => {
  return <Checkbox {...props} />;
};

export const Default: Story = {
  render: Component,
};
