import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../text';
import { AccordionButton } from './accordion-button';
import type { AccordionProps } from './wrapper';
import { Accordion, AccordionItem, AccordionPanel } from './wrapper';

const meta: Meta<typeof Accordion> = {
  title: 'Primitives/Accordion',
  tags: ['autodocs'],
  component: Accordion,
  args: {
    colorScheme: 'base',
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const Component = (props: AccordionProps) => {
  return (
    <Accordion {...props} defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <AccordionButton badges={['and', 'i', 'said']}>Section 1 title</AccordionButton>
        <AccordionPanel p={4}>
          <Text>
            25 years and my life is still Tryin&apos; to get up that great big hill of hope For a destination I realized
            quickly when I knew I should That the world was made up of this brotherhood of man For whatever that means
          </Text>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton badges={['heeeyyyyyy']}>Section 1 title</AccordionButton>
        <AccordionPanel p={4}>
          <Text>
            And so I cry sometimes when I&apos;m lying in bed Just to get it all out what&apos;s in my head And I, I am
            feeling a little peculiar And so I wake in the morning and I step outside And I take a deep breath and I get
            real high And I scream from the top of my lungs &quot;What&apos;s going on?&quot;
          </Text>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton badges={["what's", 'goin', 'on', '?']}>Section 2 title</AccordionButton>
        <AccordionPanel p={4}>
          <Text>
            And I say, hey-ey-ey Hey-ey-ey I said &quot;Hey, a-what&apos;s going on?&quot; And I say, hey-ey-ey
            Hey-ey-ey I said &quot;Hey, a-what&apos;s going on?&quot;
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export const Default: Story = {
  render: Component,
};
