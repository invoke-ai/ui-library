import type { PropsWithChildren } from 'react';
import { createContext, memo } from 'react';

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

export const FormControlGroup = memo(({ children, ...context }: FormControlGroupProps) => {
  return <FormControlGroupContext.Provider value={context}>{children}</FormControlGroupContext.Provider>;
});

FormControlGroup.displayName = 'FormControlGroup';
