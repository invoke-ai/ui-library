import { useDisclosure } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/button';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '.';

const meta: Meta<typeof Modal> = {
  title: 'Primitives/Modal',
  tags: ['autodocs'],
  component: Modal,
  args: {
    colorScheme: 'base',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const Component = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Slices of banana are caramelized with brown sugar and butter, then rolled in sushi rice and topped with a
            drizzle of caramel sauce. This variety offers a sweet and rich flavor, combining the creaminess of banana
            with the indulgent taste of caramel.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="base" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green" variant="ghost">
              Secondary Action
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: Component,
};
