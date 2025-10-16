import { GroupBase, OptionBase, OptionProps } from 'chakra-react-select';
import { ReactNode } from 'react';
export type {} from 'react-select/base';
export interface ComboboxOption extends OptionBase {
    label: string;
    value: string;
    description?: string;
    icon?: ReactNode;
    tooltip?: string;
    tags?: string[];
}
type CustomOptionProps = OptionProps<ComboboxOption, false, GroupBase<ComboboxOption>>;
export declare const CustomOptionComponent: (({ children, ...props }: CustomOptionProps) => import("react/jsx-runtime").JSX.Element) & {
    displayName?: string;
};
