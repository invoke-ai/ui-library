import { SpinnerIcon } from '@chakra-ui/icons';
import type { ComponentWithAs, MenuItemProps as ChakraMenuItemProps } from '@chakra-ui/react';
import { forwardRef, MenuItem as ChakraMenuItem } from '@chakra-ui/react';
import { memo } from 'react';

import { spinAnimation } from '../../theme';

export type MenuItemProps = ChakraMenuItemProps & {
  isDestructive?: boolean;
  isLoading?: boolean;
};

export const MenuItem: React.MemoExoticComponent<
  ComponentWithAs<ComponentWithAs<'button', ChakraMenuItemProps>, MenuItemProps>
> = memo(
  forwardRef<MenuItemProps, typeof ChakraMenuItem>((props: MenuItemProps, ref) => {
    const { isDestructive = false, isLoading = false, isDisabled, icon, ...rest } = props;
    return (
      <ChakraMenuItem
        ref={ref}
        icon={isLoading ? <SpinnerIcon animation={spinAnimation} /> : icon}
        isDisabled={isLoading || isDisabled}
        data-destructive={isDestructive}
        {...rest}
      />
    );
  })
);

MenuItem.displayName = 'MenuItem';
