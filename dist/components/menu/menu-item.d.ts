import { ComponentWithAs, MenuItemProps as ChakraMenuItemProps } from '@chakra-ui/react';
export type MenuItemProps = ChakraMenuItemProps & {
    isDestructive?: boolean;
    isLoading?: boolean;
};
type MenuItemComponent = ComponentWithAs<ComponentWithAs<'button', ChakraMenuItemProps>, MenuItemProps>;
export declare const MenuItem: MenuItemComponent;
export {};
