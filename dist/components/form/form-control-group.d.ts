import { PropsWithChildren } from 'react';
import { FormControlGroupContext } from './form-control-group-context';
export type FormControlGroupProps = PropsWithChildren<FormControlGroupContext>;
export declare const FormControlGroup: (({ children, ...context }: FormControlGroupProps) => import("react/jsx-runtime").JSX.Element) & {
    displayName?: string;
};
