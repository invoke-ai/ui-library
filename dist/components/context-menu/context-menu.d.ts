import { MenuButtonProps, MenuProps, PortalProps } from '@chakra-ui/react';
import { default as React } from 'react';
export interface ContextMenuProps<T extends HTMLElement = HTMLDivElement> {
    renderMenu: () => React.ReactElement | null;
    children: (ref: React.MutableRefObject<T | null>) => React.ReactElement | null;
    menuProps?: Omit<MenuProps, 'children'> & {
        children?: React.ReactNode;
    };
    portalProps?: Omit<PortalProps, 'children'> & {
        children?: React.ReactNode;
    };
    menuButtonProps?: MenuButtonProps;
    stopPropagation?: boolean;
    stopImmediatePropagation?: boolean;
    withLongPress?: boolean;
    longPressDelayMs?: number;
    longPressBailThreshold?: number;
}
export declare const ContextMenu: (<T extends HTMLElement = HTMLElement>({ withLongPress, longPressDelayMs, longPressBailThreshold, renderMenu, children, menuProps, portalProps, menuButtonProps, stopPropagation, stopImmediatePropagation, }: ContextMenuProps<T>) => import("react/jsx-runtime").JSX.Element) & {
    displayName?: string;
};
