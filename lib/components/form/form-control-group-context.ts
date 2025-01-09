import { createContext } from 'react';

import type { FormControlProps } from './form-control';
import type { FormLabelProps } from './form-label';

export type FormControlGroupContext = {
  formLabelProps?: FormLabelProps;
  formControlProps?: FormControlProps;
  isDisabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
};

export const FormControlGroupContext = createContext<FormControlGroupContext>({});
