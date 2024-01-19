import type { MouseEventHandler, PropsWithChildren } from 'react';
import { memo, useCallback } from 'react';

import { AccordionButton } from './accordion-button';
import { Accordion, AccordionItem, AccordionPanel } from './wrapper';

export type StandaloneAccordionProps = PropsWithChildren<{
  label: string;
  badges?: (string | number)[];
  isOpen: boolean;
  onToggle: () => void;
}>;

export const StandaloneAccordion = memo((props: StandaloneAccordionProps) => {
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
