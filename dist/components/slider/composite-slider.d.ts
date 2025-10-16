import { ComponentWithAs } from '@chakra-ui/react';
import { SliderProps } from './wrapper';
export type FormattedSliderMark = {
    value: number;
    label: string;
};
export type CompositeSliderProps = Omit<SliderProps, 'value'> & {
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
     * The fine step (when shift is pressed)
     */
    fineStep?: number;
    /**
     * The change handler
     */
    onChange: (v: number) => void;
    /**
     * The reset handler, called on double-click of the thumb
     */
    onReset?: () => void;
    /**
     * The value formatter
     */
    formatValue?: (v: number) => string;
    /**
     * Whether the slider is disabled
     */
    isDisabled?: boolean;
    /**
     * The marks to render below the slider. If true, will use the min and max values.
     */
    marks?: number[] | true;
    /**
     * Whether to show a tooltip over the slider thumb
     */
    withThumbTooltip?: boolean;
    /**
     * Whether or not to always show marks. Defaults to false, only showing marks when the slider is hovered.
     */
    alwaysShowMarks?: boolean;
};
export declare const CompositeSlider: ComponentWithAs<ComponentWithAs<'div', SliderProps>, CompositeSliderProps>;
