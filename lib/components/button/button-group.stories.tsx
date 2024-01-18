import { AddIcon } from '@chakra-ui/icons';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';
import type { ButtonGroupProps } from './button-group';
import { ButtonGroup } from './button-group';
import { IconButton } from './icon-button';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Primitives/ButtonGroup',
  tags: ['autodocs'],
  component: ButtonGroup,
  args: {
    colorScheme: 'base',
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

const Component = (props: ButtonGroupProps) => {
  return (
    <ButtonGroup {...props}>
      <Button>Test</Button>
      <Button>Test</Button>
      <Button>Test</Button>
    </ButtonGroup>
  );
};

const ComponentWithIconButtons = (props: ButtonGroupProps) => {
  return (
    <ButtonGroup {...props}>
      <IconButton aria-label="test" icon={<AddIcon />} />
      <IconButton aria-label="test" icon={<AddIcon />} />
      <IconButton aria-label="test" icon={<AddIcon />} />
    </ButtonGroup>
  );
};

export const Default: Story = {
  render: Component,
};

export const WithIconButtons: Story = {
  render: ComponentWithIconButtons,
};
