import type { ComponentWithAs, FormLabelProps as ChakraFormLabelProps } from '@chakra-ui/react';
import { FormLabel as ChakraFormLabel, forwardRef } from '@chakra-ui/react';
import { useContext } from 'react';

import { typedMemo } from '../../util';
import { FormControlGroupContext } from './form-control-group-context';

export type FormLabelProps = ChakraFormLabelProps;

export const FormLabel: ComponentWithAs<
  ComponentWithAs<'label', ChakraFormLabelProps>,
  ChakraFormLabelProps
> = typedMemo(
  forwardRef<FormLabelProps, typeof ChakraFormLabel>((props: FormLabelProps, ref) => {
    const ctx = useContext(FormControlGroupContext);
    return <ChakraFormLabel ref={ref} {...props} {...ctx.formLabelProps} />;
  })
);

FormLabel.displayName = 'FormLabel';
