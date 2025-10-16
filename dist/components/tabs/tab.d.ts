import { ComponentWithAs, TabProps as ChakraTabProps } from '@chakra-ui/react';
export type TabProps = ChakraTabProps & {
    badges?: (string | number)[];
};
export declare const Tab: ComponentWithAs<ComponentWithAs<'button', ChakraTabProps>, TabProps>;
