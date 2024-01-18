import type { ComponentWithAs, TooltipProps as ChakraTooltipProps } from '@chakra-ui/react';
import { forwardRef, Tooltip as ChakraTooltip } from '@chakra-ui/react';
import { memo } from 'react';

export type TooltipProps = ChakraTooltipProps;

const modifiers: TooltipProps['modifiers'] = [
  {
    name: 'preventOverflow',
    options: {
      padding: 12,
    },
  },
];

export const Tooltip: React.MemoExoticComponent<
  ComponentWithAs<ComponentWithAs<'div', ChakraTooltipProps>, ChakraTooltipProps>
> = memo(
  forwardRef<TooltipProps, typeof ChakraTooltip>((props: TooltipProps, ref) => {
    const { children, hasArrow = true, placement = 'top', ...rest } = props;
    return (
      <ChakraTooltip ref={ref} hasArrow={hasArrow} placement={placement} arrowSize={8} modifiers={modifiers} {...rest}>
        {children}
      </ChakraTooltip>
    );
  })
);

Tooltip.displayName = 'Tooltip';
