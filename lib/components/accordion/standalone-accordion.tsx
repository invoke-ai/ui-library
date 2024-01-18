import type { PropsWithChildren } from 'react';
import { memo } from 'react';

import { AccordionButton } from './accordion-button';
import { Accordion, AccordionItem, AccordionPanel } from './wrapper';

export type StandaloneAccordionProps = PropsWithChildren<{
  label: string;
  badges?: (string | number)[];
  defaultIsOpen?: boolean;
}>;

export const StandaloneAccordion = memo((props: StandaloneAccordionProps) => {
  return (
    <Accordion allowToggle defaultIndex={props.defaultIsOpen ? 0 : undefined}>
      <AccordionItem>
        <AccordionButton badges={props.badges}>{props.label}</AccordionButton>
        <AccordionPanel>{props.children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
});

StandaloneAccordion.displayName = 'StandaloneAccordion';
