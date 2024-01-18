import type { ButtonProps, ComponentWithAs } from '@chakra-ui/react';
import { Button, forwardRef } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { memo } from 'react';

import { InvTooltip } from '../inv-tooltip/inv-tooltip';

export type InvButtonProps = ButtonProps & {
  isChecked?: boolean;
  tooltip?: ReactNode;
};

export const InvButton: React.MemoExoticComponent<
  ComponentWithAs<ComponentWithAs<'button', ButtonProps>, InvButtonProps>
> = memo(
  forwardRef<InvButtonProps, typeof Button>(({ isChecked, tooltip, children, ...rest }: InvButtonProps, ref) => {
    if (tooltip) {
      return (
        <InvTooltip label={tooltip}>
          <Button ref={ref} colorScheme={isChecked ? 'invokeBlue' : 'base'} {...rest}>
            {children}
          </Button>
        </InvTooltip>
      );
    }

    return (
      <Button ref={ref} colorScheme={isChecked ? 'invokeBlue' : 'base'} {...rest}>
        {children}
      </Button>
    );
  })
);

InvButton.displayName = 'InvButton';
