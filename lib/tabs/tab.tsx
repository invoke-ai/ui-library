import type { ComponentWithAs, TabProps as ChakraTabProps } from '@chakra-ui/react';
import { forwardRef, Tab as ChakraTab } from '@chakra-ui/react';
import { memo } from 'react';

import { Badge } from '../badge';
import { Spacer } from '../spacer';

export type TabProps = ChakraTabProps & {
  badges?: (string | number)[];
};

export const Tab: React.MemoExoticComponent<ComponentWithAs<ComponentWithAs<'button', ChakraTabProps>, TabProps>> =
  memo(
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
