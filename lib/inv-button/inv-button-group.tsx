import type { ButtonGroupProps, ComponentWithAs } from '@chakra-ui/react';
import { ButtonGroup, forwardRef } from '@chakra-ui/react';
import { memo } from 'react';

export type InvButtonGroupProps = ButtonGroupProps;

export const InvButtonGroup: React.MemoExoticComponent<
  ComponentWithAs<ComponentWithAs<'div', ButtonGroupProps>, ButtonGroupProps>
> = memo(
  forwardRef<InvButtonGroupProps, typeof ButtonGroup>(({ isAttached = true, ...rest }: InvButtonGroupProps, ref) => {
    return <ButtonGroup ref={ref} isAttached={isAttached} {...rest} />;
  })
);

InvButtonGroup.displayName = 'InvButtonGroup';
