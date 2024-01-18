import type { AccordionButtonProps as ChakraAccordionButtonProps, ComponentWithAs } from '@chakra-ui/react';
import { AccordionButton as ChakraAccordionButton, forwardRef } from '@chakra-ui/react';
import { truncate } from 'lodash-es';
import { memo, useMemo } from 'react';

import { Badge } from '../badge';
import { Spacer } from '../spacer';
import { AccordionIcon } from './wrapper';

export type AccordionButtonProps = ChakraAccordionButtonProps & {
  badges?: (string | number)[];
};

export type AccordionButtonComponent = React.MemoExoticComponent<
  ComponentWithAs<ComponentWithAs<'button', ChakraAccordionButtonProps>, AccordionButtonProps>
>;

export const AccordionButton: AccordionButtonComponent = memo(
  forwardRef<AccordionButtonProps, typeof ChakraAccordionButton>((props, ref) => {
    const { children, badges: _badges, ...rest } = props;
    const badges = useMemo<string[] | undefined>(
      () => _badges?.map((b) => truncate(String(b), { length: 24, omission: '...' })),
      [_badges]
    );
    return (
      <ChakraAccordionButton ref={ref} {...rest}>
        {children}
        <Spacer />
        {badges?.map((b, i) => (
          <Badge key={`${b}.${i}`} colorScheme="invokeBlue">
            {b}
          </Badge>
        ))}
        <AccordionIcon />
      </ChakraAccordionButton>
    );
  })
);

AccordionButton.displayName = 'AccordionButton';
