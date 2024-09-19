import { Flex } from '@chakra-ui/layout';
import type { Meta, StoryObj } from '@storybook/react';

import type { ExternalLinkProps } from './external-link';
import { ExternalLink } from './external-link';

const meta: Meta<typeof ExternalLink> = {
  title: 'Primitives/ExternalLink',
  tags: ['autodocs'],
  component: ExternalLink,
  args: {
    label: 'External Link',
    href: 'https://example.com',
  },
};

export default meta;
type Story = StoryObj<typeof ExternalLink>;

const Component = (props: ExternalLinkProps) => {
  return (
    <Flex flexDir="column">
      <ExternalLink fontSize="sm" {...props} />
      <ExternalLink fontSize="sm" fontWeight="semibold" {...props} />
      <ExternalLink {...props} />
    </Flex>
  );
};

export const Default: Story = {
  render: Component,
};
