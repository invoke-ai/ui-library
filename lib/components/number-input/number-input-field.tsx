import type { NumberInputFieldProps as ChakraNumberInputFieldProps } from '@chakra-ui/react';
import { NumberInputField as ChakraNumberInputField } from '@chakra-ui/react';
import type { KeyboardEventHandler } from 'react';
import { useCallback } from 'react';

import { useGlobalModifiersImperativeAPI } from '../../hooks';
import { typedMemo } from '../../util';

export type NumberInputFieldProps = ChakraNumberInputFieldProps;

export const NumberInputField = typedMemo((props: NumberInputFieldProps) => {
  const { onKeyUp, onKeyDown, children, ...rest } = props;
  const { setShift } = useGlobalModifiersImperativeAPI();

  const _onKeyUp: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      onKeyUp?.(e);
      setShift(e.key === 'Shift');
    },
    [onKeyUp, setShift]
  );
  const _onKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      onKeyDown?.(e);
      setShift(e.key === 'Shift');
    },
    [onKeyDown, setShift]
  );

  return (
    <ChakraNumberInputField onKeyUp={_onKeyUp} onKeyDown={_onKeyDown} {...rest}>
      {children}
    </ChakraNumberInputField>
  );
});

NumberInputField.displayName = 'NumberInputField';
