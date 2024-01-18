import type { ComponentWithAs, IconButtonProps as ChakraIconButtonProps } from '@chakra-ui/react';
import { forwardRef, IconButton } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { memo } from 'react';

import { InvTooltip } from '../inv-tooltip';

export type InvIconButtonProps = ChakraIconButtonProps & {
  isChecked?: boolean;
  tooltip?: ReactNode;
};

export const InvIconButton: React.MemoExoticComponent<
  ComponentWithAs<ComponentWithAs<'button', ChakraIconButtonProps>, InvIconButtonProps>
> = memo(
  forwardRef<InvIconButtonProps, typeof IconButton>(({ isChecked, tooltip, ...rest }: InvIconButtonProps, ref) => {
    if (tooltip) {
      return (
        <InvTooltip label={tooltip}>
          <IconButton ref={ref} colorScheme={isChecked ? 'invokeBlue' : 'base'} {...rest} />
        </InvTooltip>
      );
    }

    return <IconButton ref={ref} colorScheme={isChecked ? 'invokeBlue' : 'base'} {...rest} />;
  })
);

InvIconButton.displayName = 'InvIconButton';
