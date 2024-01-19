import { memo } from 'react';

import { Flex } from '../flex';
import { Text } from '../text';

export type ComboboxFallbackProps = {
  label: string;
};

export const ComboboxFallback = memo((props: ComboboxFallbackProps) => (
  <Flex h={8} alignItems="center" justifyContent="center">
    <Text fontSize="sm" color="base.500">
      {props.label}
    </Text>
  </Flex>
));

ComboboxFallback.displayName = 'ComboboxFallback';
