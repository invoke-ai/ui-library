import type { ButtonProps as ChakraButtonProps, ComponentWithAs } from '@chakra-ui/react';
import { Button as ChakraButton, forwardRef } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { memo } from 'react';

import { Tooltip } from '../tooltip/tooltip';

export type ButtonProps = ChakraButtonProps & {
  isChecked?: boolean;
  tooltip?: ReactNode;
};

export const Button: React.MemoExoticComponent<
  ComponentWithAs<ComponentWithAs<'button', ChakraButtonProps>, ButtonProps>
> = memo(
  forwardRef<ButtonProps, typeof ChakraButton>(({ isChecked, tooltip, children, ...rest }: ButtonProps, ref) => {
    if (tooltip) {
      return (
        <Tooltip label={tooltip}>
          <ChakraButton ref={ref} colorScheme={isChecked ? 'invokeBlue' : 'base'} {...rest}>
            {children}
          </ChakraButton>
        </Tooltip>
      );
    }

    return (
      <ChakraButton ref={ref} colorScheme={isChecked ? 'invokeBlue' : 'base'} {...rest}>
        {children}
      </ChakraButton>
    );
  })
);

Button.displayName = 'Button';
