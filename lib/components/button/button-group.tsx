import type { ButtonGroupProps as ChakraButtonGroupProps, ComponentWithAs } from '@chakra-ui/react';
import { ButtonGroup as ChakraButtonGroup, forwardRef } from '@chakra-ui/react';

import { typedMemo } from '../../util';

export type ButtonGroupProps = ChakraButtonGroupProps;

export const ButtonGroup: ComponentWithAs<ComponentWithAs<'div', ChakraButtonGroupProps>, ButtonGroupProps> = typedMemo(
  forwardRef<ButtonGroupProps, typeof ChakraButtonGroup>(({ isAttached = true, ...rest }, ref) => {
    return <ChakraButtonGroup ref={ref} isAttached={isAttached} {...rest} />;
  })
);

ButtonGroup.displayName = 'ButtonGroup';
