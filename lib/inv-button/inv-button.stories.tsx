import { AddIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/layout';
import type { Meta, StoryObj } from '@storybook/react';

import { InvHeading } from '../inv-heading';
import type { InvButtonProps } from './inv-button';
import { InvButton } from './inv-button';

const meta: Meta<typeof InvButton> = {
  title: 'Primitives/InvButton',
  tags: ['autodocs'],
  component: InvButton,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    isLoading: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    isDisabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InvButton>;

const colorSchemes = ['base', 'invokeYellow', 'invokeRed', 'invokeGreen', 'invokeBlue'] as const;
const variants = ['solid', 'outline', 'ghost', 'link'] as const;
const sizes = ['xs', 'sm', 'md', 'lg'] as const;

const Component = (props: InvButtonProps) => {
  return (
    <Flex gap={4} flexDir="column">
      {sizes.map((size) => (
        <>
          <InvHeading>Size: {size}</InvHeading>

          <Flex key={size} gap={4} flexDir="column">
            {colorSchemes.map((colorScheme) => (
              <Flex key={colorScheme} gap={4}>
                {variants.map((variant) => (
                  <>
                    <InvButton
                      size={size}
                      key={`${variant}${colorScheme}`}
                      variant={variant}
                      colorScheme={colorScheme}
                      {...props}
                    >
                      {variant}
                    </InvButton>
                    {['solid', 'outline'].includes(variant) && (
                      <InvButton
                        size={size}
                        key={`${variant}${colorScheme}leftIcon`}
                        variant={variant}
                        colorScheme={colorScheme}
                        leftIcon={<AddIcon />}
                        {...props}
                      >
                        {variant}
                      </InvButton>
                    )}
                    {['solid', 'outline'].includes(variant) && (
                      <InvButton
                        size={size}
                        key={`${variant}${colorScheme}rightIcon`}
                        variant={variant}
                        colorScheme={colorScheme}
                        rightIcon={<AddIcon />}
                        {...props}
                      >
                        {variant}
                      </InvButton>
                    )}
                  </>
                ))}
              </Flex>
            ))}
          </Flex>
        </>
      ))}
    </Flex>
  );
};

export const Default: Story = {
  render: Component,
};
