import type { AccordionButtonProps as ChakraAccordionButtonProps, ComponentWithAs } from '@chakra-ui/react';
import { AccordionButton as ChakraAccordionButton, forwardRef } from '@chakra-ui/react';
import { truncate } from 'es-toolkit/compat';
import { useMemo } from 'react';

import { Spacer } from '../../chakra-re-exports';
import { typedMemo } from '../../util';
import { Badge } from '../badge';
import { AccordionIcon } from './wrapper';

export type AccordionButtonProps = ChakraAccordionButtonProps & {
  badges?: (string | number)[];
};

export const AccordionButton: ComponentWithAs<
  ComponentWithAs<'button', ChakraAccordionButtonProps>,
  AccordionButtonProps
> = typedMemo(
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
