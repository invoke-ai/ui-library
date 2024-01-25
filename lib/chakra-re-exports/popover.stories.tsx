import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/button';
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '.';

const meta: Meta<typeof Popover> = {
  title: 'Primitives/Popover',
  tags: ['autodocs'],
  component: Popover,
  args: {
    colorScheme: 'base',
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

const Component = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export const Default: Story = {
  render: Component,
};
