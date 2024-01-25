import { useDisclosure } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../../chakra-re-exports';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '../tabs';
import type { StandaloneAccordionProps } from './standalone-accordion';
import { StandaloneAccordion } from './standalone-accordion';

const meta: Meta<typeof StandaloneAccordion> = {
  title: 'Primitives/StandaloneAccordion',
  tags: ['autodocs'],
  component: StandaloneAccordion,
};

export default meta;
type Story = StoryObj<typeof StandaloneAccordion>;

const Component = (props: StandaloneAccordionProps) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <StandaloneAccordion
      {...props}
      label="The Best Flavours of Banana Sushi"
      badges={['Yum', 'Gourmet', 'Barf']}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <Tabs variant="collapse">
        <TabList>
          <Tab>Caramelized</Tab>
          <Tab badges={[2]}>Peanut Butter</Tab>
          <Tab badges={[4]}>Chocolate-Dipped</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Text>
              Slices of banana are caramelized with brown sugar and butter, then rolled in sushi rice and topped with a
              drizzle of caramel sauce. This variety offers a sweet and rich flavor, combining the creaminess of banana
              with the indulgent taste of caramel.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text>
              A combination of creamy peanut butter and ripe banana slices, wrapped in sushi rice and seaweed. This
              sushi delivers a satisfying balance of nutty and sweet flavors, appealing to those who enjoy classic
              peanut butter and banana pairings.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text>
              Banana slices are dipped in melted dark chocolate, then rolled in sushi rice and sprinkled with toasted
              sesame seeds. This type provides a decadent chocolate experience with a hint of nuttiness and the natural
              sweetness of banana.
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </StandaloneAccordion>
  );
};

export const Default: Story = {
  render: Component,
};
