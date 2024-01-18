import type { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';

import { FormControl, FormLabel } from '../form';
import type { CompositeSliderProps } from './composite-slider';
import { CompositeSlider } from './composite-slider';

const meta: Meta<typeof CompositeSlider> = {
  title: 'Primitives/CompositeSlider',
  tags: ['autodocs'],
  component: CompositeSlider,
  args: {
    min: 0,
    max: 10,
    step: 1,
    marks: [0, 5, 10],
  },
};

export default meta;
type Story = StoryObj<typeof CompositeSlider>;

const Component = (props: CompositeSliderProps) => {
  const [value, setValue] = useState(0);
  const onReset = useCallback(() => {
    setValue(0);
  }, []);
  return (
    <FormControl>
      <FormLabel>Some Value</FormLabel>
      <CompositeSlider {...props} value={value} onChange={setValue} onReset={onReset} />
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
