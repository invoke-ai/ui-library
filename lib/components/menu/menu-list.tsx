import type { ComponentWithAs, MenuListProps as ChakraMenuListProps } from '@chakra-ui/react';
import { forwardRef, MenuList as ChakraMenuList, Portal } from '@chakra-ui/react';

import { skipMouseEvent, typedMemo } from '../../util';
import { menuListMotionProps } from './constants';

export type MenuListProps = ChakraMenuListProps;

export const MenuList: ComponentWithAs<ComponentWithAs<'div', ChakraMenuListProps>, ChakraMenuListProps> = typedMemo(
  forwardRef<MenuListProps, typeof ChakraMenuList>((props: MenuListProps, ref) => {
    return (
      <Portal>
        <ChakraMenuList ref={ref} motionProps={menuListMotionProps} onContextMenu={skipMouseEvent} {...props} />
      </Portal>
    );
  })
);

MenuList.displayName = 'MenuList';
