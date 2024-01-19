import type { ComponentWithAs, IconButtonProps as ChakraIconButtonProps } from '@chakra-ui/react';
import { forwardRef, IconButton as ChakraIconButton } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { memo } from 'react';

import { Tooltip } from '../tooltip';

export type IconButtonProps = ChakraIconButtonProps & {
  isChecked?: boolean;
  tooltip?: ReactNode;
};

export const IconButton: React.MemoExoticComponent<
  ComponentWithAs<ComponentWithAs<'button', ChakraIconButtonProps>, IconButtonProps>
> = memo(
  forwardRef<IconButtonProps, typeof ChakraIconButton>(({ isChecked, tooltip, ...rest }: IconButtonProps, ref) => {
    if (tooltip) {
      return (
        <Tooltip label={tooltip}>
          <ChakraIconButton ref={ref} colorScheme={isChecked ? 'invokeBlue' : 'base'} {...rest} />
        </Tooltip>
      );
    }

    return <ChakraIconButton ref={ref} colorScheme={isChecked ? 'invokeBlue' : 'base'} {...rest} />;
  })
);

IconButton.displayName = 'IconButton';
