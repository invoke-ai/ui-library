import type { Meta, StoryObj } from '@storybook/react';

import type { EditableProps } from './wrapper';
import { Editable, EditableInput, EditablePreview } from './wrapper';

const meta: Meta<typeof Editable> = {
  title: 'Primitives/Editable',
  tags: ['autodocs'],
  component: Editable,
};

export default meta;
type Story = StoryObj<typeof Editable>;

const Component = (props: EditableProps) => {
  return (
    <Editable defaultValue="Take some chakra" {...props}>
      <EditablePreview />
      <EditableInput />
    </Editable>
  );
};

export const Default: Story = {
  render: Component,
};
