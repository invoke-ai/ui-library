import type { Meta, StoryObj } from '@storybook/react';

import { Tab } from './tab';
import type { TabsProps } from './wrapper';
import { TabList, TabPanel, TabPanels, Tabs } from './wrapper';

const meta: Meta<typeof Tabs> = {
  title: 'Primitives/Tabs',
  tags: ['autodocs'],
  component: Tabs,
  args: {
    colorScheme: 'base',
    variant: 'collapse',
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const Component = (props: TabsProps) => {
  return (
    <Tabs {...props}>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export const Default: Story = {
  render: Component,
};
