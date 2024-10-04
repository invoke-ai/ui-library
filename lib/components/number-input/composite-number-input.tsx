import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import type { ComponentWithAs } from '@chakra-ui/react';
import { forwardRef } from '@chakra-ui/react';
import { clamp, isNumber } from 'lodash-es';
import type { KeyboardEvent } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { useShiftModifier } from '../../hooks/use-global-modifiers';
import { stopPastePropagation, typedMemo } from '../../util';
import { NumberInputField } from './number-input-field';
import type { NumberInputProps } from './wrapper';
import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputStepper } from './wrapper';

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
};

const roundToMultiple = (value: number, multiple: number): number => {
  return Math.round(value / multiple) * multiple;
};

export const CompositeNumberInput: ComponentWithAs<
  ComponentWithAs<'div', NumberInputProps>,
  CompositeNumberInputProps
> = typedMemo(
  forwardRef<CompositeNumberInputProps, typeof NumberInput>((props, ref) => {
    const {
      value,
      min = 0,
      max,
      step: _step = 1,
      fineStep: _fineStep,
      onChange: _onChange,
      defaultValue,
      constrainValue,
      ...rest
    } = props;
    const [localValue, setLocalValue] = useState(String(value));

    useEffect(() => {
      // We need to update the local value when the value changes from some external source
      setLocalValue(String(value));
    }, [value]);

    const shift = useShiftModifier();
    const step = useMemo(() => (shift ? (_fineStep ?? _step) : _step), [shift, _fineStep, _step]);
    const isInteger = useMemo(() => Number.isInteger(_step) && Number.isInteger(_fineStep ?? 1), [_step, _fineStep]);
    const inputMode = useMemo(() => (isInteger ? 'numeric' : 'decimal'), [isInteger]);
    const precision = useMemo(() => (isInteger ? 0 : 3), [isInteger]);

    const onChange = useCallback((valueAsString: string) => {
      setLocalValue(valueAsString);
    }, []);

    const pushLocalValue = useCallback(() => {
      if (isNaN(Number(localValue))) {
        setLocalValue(String(isNumber(defaultValue) ? defaultValue : min));
        return;
      }

      const localValueAsNumber = Number(localValue);

      // Otherwise, we round the value to the nearest multiple if integer, else 3 decimals
      const roundedValue = isInteger
        ? roundToMultiple(localValueAsNumber, _fineStep ?? _step)
        : Number(localValueAsNumber.toFixed(precision));
      // Clamp to min/max
      const clampedValue = clamp(roundedValue, min, max);
      const constrainedValue = constrainValue ? constrainValue(clampedValue) : clampedValue;
      _onChange(constrainedValue);
      setLocalValue(String(constrainedValue));
    }, [_fineStep, _onChange, _step, defaultValue, isInteger, localValue, max, min, precision, constrainValue]);

    const onPointerUpStepper = useCallback(() => {
      pushLocalValue();
    }, [pushLocalValue]);

    const onKeyDown = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          pushLocalValue();
        } else if (e.key === 'Escape') {
          setLocalValue(String(value));
        }
      },
      [pushLocalValue, value]
    );

    return (
      <NumberInput
        ref={ref}
        value={localValue}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        clampValueOnBlur={false}
        focusInputOnChange={false}
        onPaste={stopPastePropagation}
        inputMode={inputMode}
        precision={precision}
        variant="filled"
        onKeyDown={onKeyDown}
        {...rest}
      >
        <NumberInputField onBlur={pushLocalValue} />
        <NumberInputStepper>
          <NumberIncrementStepper onPointerUp={onPointerUpStepper}>
            <ChevronUpIcon />
          </NumberIncrementStepper>
          <NumberDecrementStepper onPointerUp={onPointerUpStepper}>
            <ChevronDownIcon />
          </NumberDecrementStepper>
        </NumberInputStepper>
      </NumberInput>
    );
  })
);

CompositeNumberInput.displayName = 'CompositeNumberInput';
