import type { MouseEvent } from 'react';
import { memo } from 'react';

/**
 * Prevents the default behavior of the event.
 */
export const skipMouseEvent = (e: MouseEvent) => {
  e.preventDefault();
};

/**
 * A typed version of React.memo, useful for components that take generics.
 */
export const typedMemo: <T>(c: T) => T = memo;
