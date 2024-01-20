import type { AccordionProps as ChakraAccordionProps, ComponentWithAs } from '@chakra-ui/react';
import type { MouseEventHandler, PropsWithChildren } from 'react';
import { useCallback } from 'react';

import { typedMemo } from '../../util';
import { AccordionButton } from './accordion-button';
import { Accordion, AccordionItem, AccordionPanel } from './wrapper';

export type StandaloneAccordionProps = PropsWithChildren<{
  label: string;
  badges?: (string | number)[];
  isOpen: boolean;
  onToggle: () => void;
}>;

export const StandaloneAccordion: ComponentWithAs<
  ComponentWithAs<'div', ChakraAccordionProps>,
  StandaloneAccordionProps
> = typedMemo((props) => {
  const onClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      e.preventDefault();
      props.onToggle();
    },
    [props]
  );
  return (
    <Accordion index={props.isOpen ? 0 : undefined} allowToggle>
      <AccordionItem>
        <AccordionButton badges={props.badges} onClick={onClick}>
          {props.label}
        </AccordionButton>
        <AccordionPanel>{props.children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
});

StandaloneAccordion.displayName = 'StandaloneAccordion';
