import { AccordionProps as ChakraAccordionProps, ComponentWithAs } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
export type StandaloneAccordionProps = PropsWithChildren<{
    label: string;
    badges?: (string | number)[];
    isOpen: boolean;
    onToggle: () => void;
}>;
export declare const StandaloneAccordion: ComponentWithAs<ComponentWithAs<'div', ChakraAccordionProps>, StandaloneAccordionProps>;
