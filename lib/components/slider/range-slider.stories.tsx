import type { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';

import { FormControl, FormLabel } from '..';
import type { CompositeRangeSliderProps } from './composite-range-slider';
import { CompositeRangeSlider } from './composite-range-slider';

const meta: Meta<typeof CompositeRangeSlider> = {
  title: 'Primitives/CompositeRangeSlider',
  tags: ['autodocs'],
  component: CompositeRangeSlider,
  args: {
    min: 0,
    max: 10,
    step: 1,
    marks: [0, 5, 10],
  },
};

export default meta;
type Story = StoryObj<typeof CompositeRangeSlider>;

const Component = (props: CompositeRangeSliderProps) => {
  const [value, setValue] = useState<[number, number]>([2, 8]);
  const onReset = useCallback(() => {
    setValue([2, 8]);
  }, []);
  const onChange = useCallback((v: [number, number]) => {
    setValue(v);
  }, []);
  return (
    <FormControl>
      <FormLabel>Some Value</FormLabel>
      <CompositeRangeSlider {...props} value={value} onChange={onChange} onReset={onReset} />
    </FormControl>
  );
};

export const Default: Story = {
  render: Component,
  args: {
    fineStep: 0.1,
    withThumbTooltip: true,
    formatValue: (v: number) => `${v} eggs`,
  },
};
