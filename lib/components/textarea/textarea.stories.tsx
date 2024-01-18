import type { Meta, StoryObj } from '@storybook/react';

import type { TextareaProps } from './textarea';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Primitives/Textarea',
  tags: ['autodocs'],
  component: Textarea,
};

export default meta;
type Story = StoryObj<typeof Textarea>;

const Component = (props: TextareaProps) => {
  return <Textarea {...props} />;
};

export const Default: Story = {
  render: Component,
};

export const Resizeable: Story = {
  render: Component,
  args: {
    resize: 'vertical',
    minW: '200px',
    minH: '50px',
  },
};
