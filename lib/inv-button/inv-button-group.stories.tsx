import { AddIcon } from '@chakra-ui/icons';
import type { Meta, StoryObj } from '@storybook/react';

import { InvButton } from './inv-button';
import type { InvButtonGroupProps } from './inv-button-group';
import { InvButtonGroup } from './inv-button-group';
import { InvIconButton } from './inv-icon-button';

const meta: Meta<typeof InvButtonGroup> = {
  title: 'Primitives/InvButtonGroup',
  tags: ['autodocs'],
  component: InvButtonGroup,
  args: {
    colorScheme: 'base',
  },
};

export default meta;
type Story = StoryObj<typeof InvButtonGroup>;

const Component = (props: InvButtonGroupProps) => {
  return (
    <InvButtonGroup {...props}>
      <InvButton>Test</InvButton>
      <InvButton>Test</InvButton>
      <InvButton>Test</InvButton>
    </InvButtonGroup>
  );
};

const ComponentWithIconButtons = (props: InvButtonGroupProps) => {
  return (
    <InvButtonGroup {...props}>
      <InvIconButton aria-label="test" icon={<AddIcon />} />
      <InvIconButton aria-label="test" icon={<AddIcon />} />
      <InvIconButton aria-label="test" icon={<AddIcon />} />
    </InvButtonGroup>
  );
};

export const Default: Story = {
  render: Component,
};

export const WithIconButtons: Story = {
  render: ComponentWithIconButtons,
};
