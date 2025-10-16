import { default as React } from 'react';
/**
 * A typed version of React.memo, useful for components that take generics.
 */
export declare const typedMemo: <T extends keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>>(component: T, propsAreEqual?: (prevProps: React.ComponentProps<T>, nextProps: React.ComponentProps<T>) => boolean) => T & {
    displayName?: string;
};
