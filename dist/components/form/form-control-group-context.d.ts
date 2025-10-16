import { FormControlProps } from './form-control';
import { FormLabelProps } from './form-label';
export type FormControlGroupContext = {
    formLabelProps?: FormLabelProps;
    formControlProps?: FormControlProps;
    isDisabled?: boolean;
    orientation?: 'horizontal' | 'vertical';
};
export declare const FormControlGroupContext: import('react').Context<FormControlGroupContext>;
