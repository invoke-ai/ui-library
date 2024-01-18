import { Button, useDisclosure } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

import type { ConfirmationAlertDialogProps } from './confirmation-alert-dialog';
import { ConfirmationAlertDialog } from './confirmation-alert-dialog';

const meta: Meta<typeof ConfirmationAlertDialog> = {
  title: 'Primitives/ConfirmationAlertDialog',
  tags: ['autodocs'],
  component: ConfirmationAlertDialog,
  args: {
    colorScheme: 'base',
  },
};

export default meta;
type Story = StoryObj<typeof ConfirmationAlertDialog>;

const Component = (props: ConfirmationAlertDialogProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Delete Something</Button>
      <ConfirmationAlertDialog {...props} isOpen={isOpen} onClose={onClose} title="Delete Something">
        Are you sure?
      </ConfirmationAlertDialog>
    </>
  );
};

export const Default: Story = {
  render: Component,
};
