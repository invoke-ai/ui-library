import { AddIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/layout';
import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '../../chakra-re-exports';
import type { ButtonProps } from './button';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  tags: ['autodocs'],
  component: Button,
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
type Story = StoryObj<typeof Button>;

const colorSchemes = ['base', 'invokeYellow', 'invokeRed', 'invokeGreen', 'invokeBlue'] as const;
const variants = ['solid', 'outline', 'ghost', 'link'] as const;
const sizes = ['xs', 'sm', 'md', 'lg'] as const;

const Component = (props: ButtonProps) => {
  return (
    <Flex gap={4} flexDir="column">
      {sizes.map((size) => (
        <>
          <Heading>Size: {size}</Heading>

          <Flex key={size} gap={4} flexDir="column">
            {colorSchemes.map((colorScheme) => (
              <Flex key={colorScheme} gap={4}>
                {variants.map((variant) => (
                  <>
                    <Button
                      size={size}
                      key={`${variant}${colorScheme}`}
                      variant={variant}
                      colorScheme={colorScheme}
                      {...props}
                    >
                      {variant}
                    </Button>
                    {['solid', 'outline'].includes(variant) && (
                      <Button
                        size={size}
                        key={`${variant}${colorScheme}leftIcon`}
                        variant={variant}
                        colorScheme={colorScheme}
                        leftIcon={<AddIcon />}
                        {...props}
                      >
                        {variant}
                      </Button>
                    )}
                    {['solid', 'outline'].includes(variant) && (
                      <Button
                        size={size}
                        key={`${variant}${colorScheme}rightIcon`}
                        variant={variant}
                        colorScheme={colorScheme}
                        rightIcon={<AddIcon />}
                        {...props}
                      >
                        {variant}
                      </Button>
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
