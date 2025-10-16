import { AccordionButtonProps as ChakraAccordionButtonProps, ComponentWithAs } from '@chakra-ui/react';
export type AccordionButtonProps = ChakraAccordionButtonProps & {
    badges?: (string | number)[];
};
export declare const AccordionButton: ComponentWithAs<ComponentWithAs<'button', ChakraAccordionButtonProps>, AccordionButtonProps>;
