import type { ComponentWithAs, TabProps as ChakraTabProps } from '@chakra-ui/react';
import { forwardRef, Tab as ChakraTab } from '@chakra-ui/react';

import { typedMemo } from '../../util';
import { Badge } from '../badge';
import { Spacer } from '../spacer';

export type TabProps = ChakraTabProps & {
  badges?: (string | number)[];
};

export const Tab: ComponentWithAs<ComponentWithAs<'button', ChakraTabProps>, TabProps> = typedMemo(
  forwardRef<TabProps, typeof ChakraTab>((props: TabProps, ref) => {
    const { children, badges, ...rest } = props;
    return (
      <ChakraTab ref={ref} {...rest}>
        {children}
        <Spacer />
        {badges?.map((b, i) => (
          <Badge key={`${b}.${i}`} colorScheme="invokeYellow">
            {b}
          </Badge>
        ))}
      </ChakraTab>
    );
  })
);

Tab.displayName = 'Tab';
