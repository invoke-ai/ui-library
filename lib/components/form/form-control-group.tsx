import type { PropsWithChildren } from 'react';

import { typedMemo } from '../../util';
import { FormControlGroupContext } from './form-control-group-context';

export type FormControlGroupProps = PropsWithChildren<FormControlGroupContext>;

export const FormControlGroup = typedMemo(({ children, ...context }: FormControlGroupProps) => {
  return <FormControlGroupContext.Provider value={context}>{children}</FormControlGroupContext.Provider>;
});

FormControlGroup.displayName = 'FormControlGroup';
