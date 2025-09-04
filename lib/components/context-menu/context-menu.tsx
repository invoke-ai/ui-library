/**
 * Adapted from https://github.com/lukasbach/chakra-ui-contextmenu
 */
import type { ChakraProps, MenuButtonProps, MenuProps, PortalProps } from '@chakra-ui/react';
import { useDisclosure, useEventListener } from '@chakra-ui/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Portal } from '../../chakra-re-exports';
import { useGlobalMenuClose } from '../../hooks';
import { typedMemo } from '../../util';
import { Menu, MenuButton } from '../menu';

export interface ContextMenuProps<T extends HTMLElement = HTMLDivElement> {
  renderMenu: () => React.ReactElement | null;
  children: (ref: React.MutableRefObject<T | null>) => React.ReactElement | null;
  menuProps?: Omit<MenuProps, 'children'> & { children?: React.ReactNode };
  portalProps?: Omit<PortalProps, 'children'> & { children?: React.ReactNode };
  menuButtonProps?: MenuButtonProps;
  stopPropagation?: boolean;
  stopImmediatePropagation?: boolean;
  withLongPress?: boolean;
  longPressDelayMs?: number;
  longPressBailThreshold?: number;
}

export const ContextMenu = typedMemo(
  <T extends HTMLElement = HTMLElement>({
    withLongPress = true,
    longPressDelayMs = 500,
    longPressBailThreshold = 10,
    renderMenu,
    children,
    menuProps,
    portalProps,
    menuButtonProps,
    stopPropagation = false,
    stopImmediatePropagation = false,
  }: ContextMenuProps<T>) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [position, setPosition] = useState([-1, -1]);
    const targetRef = useRef<T>(null);
    const lastPositionRef = useRef<[number, number]>([-1, -1]);
    const longPressTimeoutRef = useRef(0);
    const animationTimeoutRef = useRef(0);

    useGlobalMenuClose(onClose);

    const onContextMenu = useCallback(
      (e: MouseEvent | PointerEvent) => {
        if (e.shiftKey) {
          onClose();
          return;
        }
        // `contains()` requires the arg to be Node. Technically it can be any EventTarget, but it won't cause an error.

        if (targetRef.current?.contains(e.target as Node) || e.target === targetRef.current) {
          if (stopImmediatePropagation) {
            e.stopImmediatePropagation();
          }
          if (stopPropagation) {
            e.stopPropagation();
          }
          // clear pending delayed open
          window.clearTimeout(animationTimeoutRef.current);
          e.preventDefault();
          if (lastPositionRef.current[0] !== e.pageX || lastPositionRef.current[1] !== e.pageY) {
            // if the mouse moved, we need to close, wait for animation and reopen the menu at the new position
            onClose();
            animationTimeoutRef.current = window.setTimeout(() => {
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
      [onClose, onOpen, stopImmediatePropagation, stopPropagation]
    );

    // Use a long press to open the context menu on touch devices
    const onPointerDown = useCallback(
      (e: PointerEvent) => {
        if (!withLongPress) {
          return;
        }

        if (e.pointerType === 'mouse') {
          // Bail out if it's a mouse event - this is for touch/pen only
          return;
        }
        longPressTimeoutRef.current = window.setTimeout(() => {
          onContextMenu(e);
        }, longPressDelayMs ?? 500); // Adjust the delay as needed

        lastPositionRef.current = [e.pageX, e.pageY];
      },
      [withLongPress, longPressDelayMs, onContextMenu]
    );

    const onPointerMove = useCallback(
      (e: PointerEvent) => {
        if (!withLongPress) {
          return;
        }

        if (longPressTimeoutRef.current === null) {
          return;
        }

        const lastPosition = lastPositionRef.current;

        const distanceFromLastPosition = Math.hypot(e.pageX - lastPosition[0], e.pageY - lastPosition[1]);

        if (distanceFromLastPosition > longPressBailThreshold) {
          clearTimeout(longPressTimeoutRef.current);
        }
      },
      [longPressBailThreshold, withLongPress]
    );

    const onPointerUp = useCallback(() => {
      if (!withLongPress) {
        return;
      }

      if (longPressTimeoutRef.current) {
        clearTimeout(longPressTimeoutRef.current);
      }
    }, [withLongPress]);

    const onPointerCancel = useCallback(() => {
      if (!withLongPress) {
        return;
      }

      if (longPressTimeoutRef.current) {
        clearTimeout(longPressTimeoutRef.current);
      }
    }, [withLongPress]);

    useEffect(
      () => () => {
        window.clearTimeout(animationTimeoutRef.current);
      },
      []
    );

    useEffect(() => {
      if (!withLongPress) {
        return;
      }

      if (!targetRef.current) {
        return;
      }

      const controller = new AbortController();

      // Prevent selecting the element on long press
      targetRef.current.style.userSelect = 'none';
      targetRef.current.style.webkitUserSelect = 'none';

      // Handle the long press
      targetRef.current.addEventListener('pointerdown', onPointerDown, { signal: controller.signal });
      targetRef.current.addEventListener('pointerup', onPointerUp, { signal: controller.signal });
      targetRef.current.addEventListener('pointercancel', onPointerCancel, { signal: controller.signal });
      targetRef.current.addEventListener('pointermove', onPointerMove, { signal: controller.signal });

      return () => {
        controller.abort();
      };
    }, [onPointerCancel, onPointerDown, onPointerMove, onPointerUp, withLongPress]);

    useEventListener(window, 'contextmenu', onContextMenu);

    return (
      <>
        {children(targetRef)}
        <Portal {...portalProps}>
          <Menu isLazy isOpen={isOpen} gutter={0} placement="auto-end" onClose={onClose} {...menuProps}>
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
              {...menuButtonProps}
            />
            {renderMenu()}
          </Menu>
        </Portal>
      </>
    );
  }
);

const _hover: ChakraProps['_hover'] = { bg: 'transparent' };
