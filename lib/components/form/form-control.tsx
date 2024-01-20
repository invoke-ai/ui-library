import type { ComponentWithAs, FormControlProps as ChakraFormControlProps } from '@chakra-ui/react';
import { FormControl as ChakraFormControl, forwardRef } from '@chakra-ui/react';
import { useContext, useMemo } from 'react';

import { typedMemo } from '../../util';
import { FormControlGroupContext } from './form-control-group';

export type FormControlProps = ChakraFormControlProps;

export const FormControl: ComponentWithAs<
  ComponentWithAs<'div', ChakraFormControlProps>,
  ChakraFormControlProps
> = typedMemo(
  forwardRef<FormControlProps, typeof ChakraFormControl>((props: FormControlProps, ref) => {
    const { orientation: _orientation, isDisabled: _isDisabled, ...formControlProps } = props;
    const ctx = useContext(FormControlGroupContext);
    const orientation = useMemo(() => _orientation ?? ctx.orientation, [_orientation, ctx.orientation]);
    const isDisabled = useMemo(() => _isDisabled ?? ctx.isDisabled, [_isDisabled, ctx.isDisabled]);

    return (
      <ChakraFormControl
        ref={ref}
        orientation={orientation}
        isDisabled={isDisabled}
        {...formControlProps}
        {...ctx.formControlProps}
      />
    );
  })
);

FormControl.displayName = 'FormControl';
