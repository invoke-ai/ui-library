import { ChevronDownIcon } from '@chakra-ui/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { FaCopy, FaDownload, FaTrash } from 'react-icons/fa6';

import { Button } from '../button';
import { MenuItem } from './menu-item';
import { MenuList } from './menu-list';
import type { MenuProps } from './wrapper';
import { Menu, MenuButton, MenuGroup } from './wrapper';

const meta: Meta<typeof Menu> = {
  title: 'Primitives/Menu',
  tags: ['autodocs'],
  component: Menu,
  args: {
    colorScheme: 'base',
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

const Component = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuGroup title="Some Category">
          <MenuItem icon={<FaDownload />} command="⌘S">
            Download
          </MenuItem>
          <MenuItem icon={<FaCopy />} isLoading command="⌘C">
            Create a Copy
          </MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem icon={<FaTrash />} isDestructive>
            Delete
          </MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuGroup>
        <MenuGroup title="Another Category">
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
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export const Default: Story = {
  render: Component,
};
