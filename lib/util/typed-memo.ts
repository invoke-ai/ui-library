import type React from 'react';
import { memo } from 'react';

/**
 * A typed version of React.memo, useful for components that take generics.
 */
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const typedMemo: <T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>>(
  component: T,
  propsAreEqual?: (prevProps: React.ComponentProps<T>, nextProps: React.ComponentProps<T>) => boolean
) => T & { displayName?: string } = memo;
