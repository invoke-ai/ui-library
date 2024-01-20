import { typedMemo } from '../../util';
import { Flex } from '../flex';
import { Text } from '../text';

export type ComboboxFallbackProps = {
  label: string;
};

export const ComboboxFallback = typedMemo((props: ComboboxFallbackProps) => (
  <Flex h={8} alignItems="center" justifyContent="center">
    <Text fontSize="sm" color="base.500">
      {props.label}
    </Text>
  </Flex>
));

ComboboxFallback.displayName = 'ComboboxFallback';
