import { GroupBase, Props as ChakraReactSelectProps, SelectInstance, SingleValue } from 'chakra-react-select';
import { default as React } from 'react';
import { SystemStyleObject } from '@chakra-ui/styled-system';
import { ComboboxOption } from './custom-option';
export type {} from 'react-select/base';
export type ComboboxOnChange = (v: SingleValue<ComboboxOption> | null) => void;
export type ComboboxProps = ChakraReactSelectProps<ComboboxOption, false, GroupBase<ComboboxOption>> & {
    sx?: SystemStyleObject;
    selectRef?: React.RefObject<SelectInstance<ComboboxOption, false, GroupBase<ComboboxOption>>>;
    inputRef?: React.MutableRefObject<HTMLInputElement | null>;
};
export declare const Combobox: ((props: ComboboxProps) => import("react/jsx-runtime").JSX.Element) & {
    displayName?: string;
};
