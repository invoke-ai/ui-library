/**
 * Adapted from https://github.com/lukasbach/chakra-ui-contextmenu
 */
import type { ChakraProps, MenuButtonProps, MenuProps, PortalProps } from '@chakra-ui/react';
import { useDisclosure, useEventListener } from '@chakra-ui/react';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Portal } from '../../chakra-re-exports';
import { useGlobalMenuClose } from '../../hooks';
import { typedMemo } from '../../util';
import { Menu, MenuButton } from '../menu';

export interface ContextMenuProps<T extends HTMLElement = HTMLDivElement> {
  renderMenu: () => JSX.Element | null;
  children: (ref: React.MutableRefObject<T | null>) => JSX.Element | null;
  menuProps?: Omit<MenuProps, 'children'> & { children?: React.ReactNode };
  portalProps?: Omit<PortalProps, 'children'> & { children?: React.ReactNode };
  menuButtonProps?: MenuButtonProps;
  stopPropagation?: boolean;
  stopImmediatePropagation?: boolean;
}

export const ContextMenu = typedMemo(<T extends HTMLElement = HTMLElement>(props: ContextMenuProps<T>) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [position, setPosition] = useState([-1, -1]);
  const targetRef = useRef<T>(null);
  const lastPositionRef = useRef([-1, -1]);
  const timeoutRef = useRef(0);

  useGlobalMenuClose(onClose);

  const onContextMenu = useCallback(
    (e: MouseEvent) => {
      if (e.shiftKey) {
        onClose();
        return;
      }
      // `contains()` requires the arg to be Node. Technically it can be any EventTarget, but it won't cause an error.
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions */
      if (targetRef.current?.contains(e.target as Node) || e.target === targetRef.current) {
        if (props.stopImmediatePropagation) {
          e.stopImmediatePropagation();
        }
        if (props.stopPropagation) {
          e.stopPropagation();
        }
        // clear pending delayed open
        window.clearTimeout(timeoutRef.current);
        e.preventDefault();
        if (lastPositionRef.current[0] !== e.pageX || lastPositionRef.current[1] !== e.pageY) {
          // if the mouse moved, we need to close, wait for animation and reopen the menu at the new position
          onClose();
          timeoutRef.current = window.setTimeout(() => {
            onOpen();
            setPosition([e.pageX, e.pageY]);
          }, 100);
        } else {
          // else we can just open the menu at the current position
          onOpen();
          setPosition([e.pageX, e.pageY]);
        }
      }
      lastPositionRef.current = [e.pageX, e.pageY];
    },
    [onClose, onOpen, props.stopImmediatePropagation, props.stopPropagation]
  );

  useEffect(
    () => () => {
      window.clearTimeout(timeoutRef.current);
    },
    []
  );

  useEventListener('contextmenu', onContextMenu);

  return (
    <>
      {props.children(targetRef)}
      <Portal {...props.portalProps}>
        <Menu isLazy isOpen={isOpen} gutter={0} placement="auto-end" onClose={onClose} {...props.menuProps}>
          <MenuButton
            aria-hidden={true}
            w={1}
            h={1}
            position="absolute"
            left={position[0]}
            top={position[1]}
            cursor="default"
            bg="transparent"
            size="sm"
            _hover={_hover}
            pointerEvents="none"
            {...props.menuButtonProps}
          />
          {props.renderMenu()}
        </Menu>
      </Portal>
    </>
  );
});

const _hover: ChakraProps['_hover'] = { bg: 'transparent' };
