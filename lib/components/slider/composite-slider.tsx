import { useFormControl } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { isNil } from 'lodash-es';
import { memo, useCallback, useMemo, useState } from 'react';

import { useShiftModifier } from '../../hooks/useGlobalModifiers';
import { Tooltip } from '../tooltip';
import { SliderMark } from './slider-mark';
import type { SliderProps } from './wrapper';
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from './wrapper';

type FormattedSliderMark = { value: number; label: string };

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
};

const defaultFormatValue = (v: number) => v.toString();

export const CompositeSlider = memo((props: CompositeSliderProps) => {
  const {
    value,
    min,
    max,
    step: _step = 1,
    fineStep: _fineStep,
    onChange,
    onReset: _onReset,
    defaultValue,
    formatValue = defaultFormatValue,
    marks: _marks,
    withThumbTooltip: withTooltip = false,
    ...sliderProps
  } = props;
  const [isMouseOverSlider, setIsMouseOverSlider] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  const shift = useShiftModifier();
  const step = useMemo(() => (shift ? _fineStep ?? _step : _step), [shift, _fineStep, _step]);
  const controlProps = useFormControl({});

  const label = useMemo(() => formatValue(value), [formatValue, value]);

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

  const onReset = useCallback(() => {
    if (!isNil(defaultValue)) {
      onChange(defaultValue);
    }
    if (_onReset) {
      _onReset();
    }
  }, [defaultValue, onChange, _onReset]);

  return (
    <Slider
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
            <SliderMark key={m.value} value={m.value} label={m.label} index={i} total={marks.length} />
          ))}
      </AnimatePresence>

      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>

      <Tooltip isOpen={withTooltip && (isMouseOverSlider || isChanging)} label={label}>
        <SliderThumb onDoubleClick={onReset} zIndex={0} />
      </Tooltip>
    </Slider>
  );
});

CompositeSlider.displayName = 'CompositeSlider';
