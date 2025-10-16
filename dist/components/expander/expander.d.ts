import { PropsWithChildren } from 'react';
export type ExpanderProps = PropsWithChildren<{
    label?: string;
    isOpen: boolean;
    onToggle: () => void;
}>;
export declare const Expander: ((props: ExpanderProps) => import("react/jsx-runtime").JSX.Element) & {
    displayName?: string;
};
