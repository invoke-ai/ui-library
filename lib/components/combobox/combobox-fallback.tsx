import { Flex, Text } from '../../chakra-re-exports';
import { typedMemo } from '../../util';

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
