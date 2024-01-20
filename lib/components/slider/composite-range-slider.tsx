import type { ComponentWithAs } from '@chakra-ui/react';
import { forwardRef, useFormControl } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { useCallback, useMemo, useState } from 'react';

import { useShiftModifier } from '../../hooks/use-global-modifiers';
import { typedMemo } from '../../util';
import { Tooltip } from '../tooltip';
import type { FormattedSliderMark } from './composite-slider';
import { RangeSliderMark } from './range-slider-mark';
import type { RangeSliderProps } from './wrapper';
import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from './wrapper';

export type CompositeRangeSliderProps = Omit<RangeSliderProps, 'value'> & {
  /**
   * The value
   */
  value: [number, number];
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
  onChange: (v: [number, number]) => void;
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
};

export const CompositeRangeSlider: ComponentWithAs<
  ComponentWithAs<'div', RangeSliderProps>,
  CompositeRangeSliderProps
> = typedMemo(
  forwardRef<CompositeRangeSliderProps, typeof RangeSlider>((props, ref) => {
    const {
      value,
      min,
      max,
      step: _step = 1,
      fineStep: _fineStep,
      onChange,
      onReset,
      formatValue = (v: number) => v.toString(),
      marks: _marks,
      withThumbTooltip: withTooltip = false,
      ...sliderProps
    } = props;
    const [isMouseOverSlider, setIsMouseOverSlider] = useState(false);
    const [isChanging, setIsChanging] = useState(false);

    const shift = useShiftModifier();
    const step = useMemo(() => (shift ? _fineStep ?? _step : _step), [shift, _fineStep, _step]);
    const controlProps = useFormControl({});

    const labels = useMemo<string[]>(() => value.map(formatValue), [formatValue, value]);

    const onMouseEnter = useCallback(() => setIsMouseOverSlider(true), []);
    const onMouseLeave = useCallback(() => setIsMouseOverSlider(false), []);
    const onChangeStart = useCallback(() => setIsChanging(true), []);
    const onChangeEnd = useCallback(() => setIsChanging(false), []);

    const marks = useMemo<FormattedSliderMark[]>(() => {
      if (_marks === true) {
        return [min, max].map((m) => ({ value: m, label: formatValue(m) }));
      }
      if (_marks) {
        return _marks?.map((m) => ({ value: m, label: formatValue(m) }));
      }
      return [];
    }, [_marks, formatValue, max, min]);

    return (
      <RangeSlider
        ref={ref}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        focusThumbOnChange={false}
        onChangeStart={onChangeStart}
        onChangeEnd={onChangeEnd}
        {...sliderProps}
        {...controlProps}
      >
        <AnimatePresence>
          {marks?.length &&
            (isMouseOverSlider || isChanging) &&
            marks.map((m, i) => (
              <RangeSliderMark key={m.value} value={m.value} label={m.label} index={i} total={marks.length} />
            ))}
        </AnimatePresence>

        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>

        <Tooltip isOpen={withTooltip && (isMouseOverSlider || isChanging)} label={labels[0]}>
          <RangeSliderThumb index={0} onDoubleClick={onReset} zIndex={0} />
        </Tooltip>
        <Tooltip isOpen={withTooltip && (isMouseOverSlider || isChanging)} label={labels[1]}>
          <RangeSliderThumb index={1} onDoubleClick={onReset} zIndex={0} />
        </Tooltip>
      </RangeSlider>
    );
  })
);

CompositeRangeSlider.displayName = 'CompositeRangeSlider';
