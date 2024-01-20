import type { PropsWithChildren } from 'react';
import { createContext } from 'react';

import { typedMemo } from '../../util';
import type { FormControlProps } from './form-control';
import type { FormLabelProps } from './form-label';

export type FormControlGroupContext = {
  formLabelProps?: FormLabelProps;
  formControlProps?: FormControlProps;
  isDisabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
};

export const FormControlGroupContext = createContext<FormControlGroupContext>({});

export type FormControlGroupProps = PropsWithChildren<FormControlGroupContext>;

export const FormControlGroup = typedMemo(({ children, ...context }: FormControlGroupProps) => {
  return <FormControlGroupContext.Provider value={context}>{children}</FormControlGroupContext.Provider>;
});

FormControlGroup.displayName = 'FormControlGroup';
