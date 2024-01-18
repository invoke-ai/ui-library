import type { ButtonGroupProps as ChakraButtonGroupProps, ComponentWithAs } from '@chakra-ui/react';
import { ButtonGroup as ChakraButtonGroup, forwardRef } from '@chakra-ui/react';
import { memo } from 'react';

export type ButtonGroupProps = ChakraButtonGroupProps;

export const ButtonGroup: React.MemoExoticComponent<
  ComponentWithAs<ComponentWithAs<'div', ChakraButtonGroupProps>, ChakraButtonGroupProps>
> = memo(
  forwardRef<ButtonGroupProps, typeof ChakraButtonGroup>(({ isAttached = true, ...rest }: ButtonGroupProps, ref) => {
    return <ChakraButtonGroup ref={ref} isAttached={isAttached} {...rest} />;
  })
);

ButtonGroup.displayName = 'ButtonGroup';
