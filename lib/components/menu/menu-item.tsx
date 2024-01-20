import { SpinnerIcon } from '@chakra-ui/icons';
import type { ComponentWithAs, MenuItemProps as ChakraMenuItemProps } from '@chakra-ui/react';
import { forwardRef, MenuItem as ChakraMenuItem } from '@chakra-ui/react';

import { spinAnimation } from '../../theme';
import { typedMemo } from '../../util';

export type MenuItemProps = ChakraMenuItemProps & {
  isDestructive?: boolean;
  isLoading?: boolean;
};

type MenuItemComponent = ComponentWithAs<ComponentWithAs<'button', ChakraMenuItemProps>, MenuItemProps>;

export const MenuItem: MenuItemComponent = typedMemo(
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
