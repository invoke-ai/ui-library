import type { ComponentWithAs, InputProps as ChakraInputProps } from '@chakra-ui/react';
import { forwardRef, Input as ChakraInput } from '@chakra-ui/react';
import type { KeyboardEvent } from 'react';
import { useCallback } from 'react';

import { useGlobalModifiersImperativeAPI } from '../../hooks/use-global-modifiers';
import { stopPastePropagation, typedMemo } from '../../util';

export type InputProps = ChakraInputProps;

export const Input: ComponentWithAs<ComponentWithAs<'input', ChakraInputProps>, ChakraInputProps> = typedMemo(
  forwardRef<InputProps, typeof ChakraInput>((props: InputProps, ref) => {
    const { setShift } = useGlobalModifiersImperativeAPI();
    const onKeyUpDown = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        setShift(e.shiftKey);
      },
      [setShift]
    );
    return (
      <ChakraInput ref={ref} onPaste={stopPastePropagation} onKeyUp={onKeyUpDown} onKeyDown={onKeyUpDown} {...props} />
    );
  })
);

Input.displayName = 'Input';
