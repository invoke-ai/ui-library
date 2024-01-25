import type { Meta, StoryObj } from '@storybook/react';
import { useCallback } from 'react';
import { FaCopy, FaDownload, FaTrash } from 'react-icons/fa6';

import { Text } from '../../chakra-re-exports';
import { MenuItem, MenuList } from '../menu';
import { ContextMenu } from './context-menu';

const meta: Meta<typeof ContextMenu> = {
  title: 'Primitives/ContextMenu',
  tags: ['autodocs'],
  component: ContextMenu,
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

const Component = () => {
  const renderMenuFunc = useCallback(
    () => (
      <MenuList>
        <MenuItem icon={<FaDownload />} command="⌘S">
          Download
        </MenuItem>
        <MenuItem icon={<FaCopy />} command="⌘C">
          Create a Copy
        </MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem icon={<FaTrash />} isDestructive>
          Delete
        </MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    ),
    []
  );

  return (
    <ContextMenu<HTMLParagraphElement> renderMenu={renderMenuFunc}>
      {(ref) => (
        <Text ref={ref} p={5} bg="invokeBlue.500">
          Right-click me
        </Text>
      )}
    </ContextMenu>
  );
};

export const Default: Story = {
  render: Component,
};
