import { ButtonProps as ChakraButtonProps, ComponentWithAs } from '@chakra-ui/react';
import { ReactNode } from 'react';
export type ButtonProps = ChakraButtonProps & {
    isChecked?: boolean;
    tooltip?: ReactNode;
};
export declare const Button: ComponentWithAs<ComponentWithAs<'button', ChakraButtonProps>, ButtonProps>;
