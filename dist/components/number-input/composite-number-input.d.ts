import { ComponentWithAs } from '@chakra-ui/react';
import { NumberInputProps } from './wrapper';
export type CompositeNumberInputProps = Omit<NumberInputProps, 'onChange' | 'min' | 'max'> & {
    /**
     * The value
     */
    value: number;
    /**
     * The minimum value
     */
    min: number;
    /**
     * The maximum value
     */
    max: number;
    /**
     * The default step
     */
    step?: number;
    /**
     * The fine step (used when shift is pressed)
     */
    fineStep?: number;
    /**
     * The change handler
     */
    onChange: (v: number) => void;
    /**
     * An optional callback to constrain the value. For example, to round it to the nearest multiple of 8.
     */
    constrainValue?: (v: number) => number;
    /**
     * Whether to allow math expressions (e.g. "1+2/3*4"). Defaults to false.
     * Expressions are evaluated using the math-expression-evaluator library. Trigonometric functions use degrees.
     */
    allowMath?: boolean;
};
export declare const CompositeNumberInput: ComponentWithAs<ComponentWithAs<'div', NumberInputProps>, CompositeNumberInputProps>;
