import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import type { ComponentWithAs } from '@chakra-ui/react';
import { forwardRef } from '@chakra-ui/react';
import { clamp } from 'lodash-es';
import type { FocusEventHandler } from 'react';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { useShiftModifier } from '../../hooks/use-global-modifiers';
import { stopPastePropagation } from '../../util';
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
};

const isValidCharacter = (char: string): boolean => /^[0-9\-.]$/i.test(char);
const roundToMultiple = (value: number, multiple: number): number => {
  return Math.round(value / multiple) * multiple;
};

export const CompositeNumberInput: React.MemoExoticComponent<
  ComponentWithAs<ComponentWithAs<'div', NumberInputProps>, CompositeNumberInputProps>
> = memo(
  forwardRef<CompositeNumberInputProps, typeof NumberInput>((props, ref) => {
    const {
      value,
      min = 0,
      max,
      step: _step = 1,
      fineStep: _fineStep,
      onChange: _onChange,
      defaultValue,
      ...rest
    } = props;

    const [valueAsString, setValueAsString] = useState<string>(String(value));
    const [valueAsNumber, setValueAsNumber] = useState<number>(value);
    const shift = useShiftModifier();
    const step = useMemo(() => (shift ? _fineStep ?? _step : _step), [shift, _fineStep, _step]);
    const isInteger = useMemo(() => Number.isInteger(_step) && Number.isInteger(_fineStep ?? 1), [_step, _fineStep]);

    const inputMode = useMemo(() => (isInteger ? 'numeric' : 'decimal'), [isInteger]);

    const precision = useMemo(() => (isInteger ? 0 : 3), [isInteger]);

    const onChange = useCallback(
      (valueAsString: string, valueAsNumber: number) => {
        setValueAsString(valueAsString);
        if (isNaN(valueAsNumber)) {
          return;
        }
        setValueAsNumber(valueAsNumber);
        _onChange(valueAsNumber);
      },
      [_onChange]
    );

    // This appears to be unnecessary? Cannot figure out what it did but leaving it here in case
    // it was important.
    // const onClickStepper = useCallback(
    //   () => _onChange(Number(valueAsString)),
    //   [_onChange, valueAsString]
    // );

    const onBlur: FocusEventHandler<HTMLInputElement> = useCallback(
      (e) => {
        if (!e.target.value) {
          // If the input is empty, we set it to the minimum value
          onChange(String(defaultValue ?? min), Number(defaultValue) ?? min);
        } else {
          // Otherwise, we round the value to the nearest multiple if integer, else 3 decimals
          const roundedValue = isInteger
            ? roundToMultiple(valueAsNumber, _fineStep ?? _step)
            : Number(valueAsNumber.toFixed(precision));
          // Clamp to min/max
          const clampedValue = clamp(roundedValue, min, max);
          onChange(String(clampedValue), clampedValue);
        }
      },
      [_fineStep, _step, defaultValue, isInteger, max, min, onChange, precision, valueAsNumber]
    );

    /**
     * When `value` changes (e.g. from a diff source than this component), we need
     * to update the internal `valueAsString`, but only if the actual value is different
     * from the current value.
     */
    useEffect(() => {
      if (value !== valueAsNumber) {
        setValueAsString(String(value));
        setValueAsNumber(value);
      }
    }, [value, valueAsNumber]);

    return (
      <NumberInput
        ref={ref}
        value={valueAsString}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        clampValueOnBlur={false}
        isValidCharacter={isValidCharacter}
        focusInputOnChange={false}
        onPaste={stopPastePropagation}
        inputMode={inputMode}
        precision={precision}
        variant="filled"
        {...rest}
      >
        <NumberInputField onBlur={onBlur} />
        <NumberInputStepper>
          <NumberIncrementStepper>
            <ChevronUpIcon />
          </NumberIncrementStepper>
          <NumberDecrementStepper>
            <ChevronDownIcon />
          </NumberDecrementStepper>
        </NumberInputStepper>
      </NumberInput>
    );
  })
);

CompositeNumberInput.displayName = 'CompositeNumberInput';
