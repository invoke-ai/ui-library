import type { ComponentWithAs, TextareaProps as ChakraTextareaProps } from '@chakra-ui/react';
import { forwardRef, Textarea as ChakraTextarea } from '@chakra-ui/react';
import type { KeyboardEvent } from 'react';
import { useCallback } from 'react';

import { useGlobalModifiersImperativeAPI } from '../../hooks';
import { stopPastePropagation, typedMemo } from '../../util';

export type TextareaProps = ChakraTextareaProps;

export const Textarea: ComponentWithAs<
  ComponentWithAs<'textarea', ChakraTextareaProps>,
  ChakraTextareaProps
> = typedMemo(
  forwardRef<TextareaProps, typeof ChakraTextarea>((props: TextareaProps, ref) => {
    const { ...rest } = props;
    const { setShift } = useGlobalModifiersImperativeAPI();
    const onKeyUpDown = useCallback(
      (e: KeyboardEvent<HTMLTextAreaElement>) => {
        setShift(e.shiftKey);
      },
      [setShift]
    );
    return (
      <ChakraTextarea
        ref={ref}
        onPaste={stopPastePropagation}
        onKeyUp={onKeyUpDown}
        onKeyDown={onKeyUpDown}
        minH={20}
        {...rest}
      />
    );
  })
);

Textarea.displayName = 'Textarea';
