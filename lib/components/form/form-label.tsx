import type { FormLabelProps as ChakraFormLabelProps } from '@chakra-ui/react';
import { FormLabel as ChakraFormLabel, forwardRef } from '@chakra-ui/react';
import { memo, useContext } from 'react';

import { FormControlGroupContext } from './form-control-group';

export type FormLabelProps = ChakraFormLabelProps;

export const FormLabel = memo(
  forwardRef<FormLabelProps, typeof ChakraFormLabel>((props: FormLabelProps, ref) => {
    const ctx = useContext(FormControlGroupContext);
    return <ChakraFormLabel ref={ref} {...props} {...ctx.labelProps} />;
  })
);

FormLabel.displayName = 'FormLabel';
