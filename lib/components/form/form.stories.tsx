import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { CompositeNumberInput } from '../number-input/composite-number-input';
import { CompositeSlider } from '../slider/composite-slider';
import { FormHelperText } from '.';
import type { FormControlProps } from './form-control';
import { FormControl } from './form-control';
import { FormLabel } from './form-label';

const meta: Meta<typeof FormControl> = {
  title: 'Primitives/FormControl',
  tags: ['autodocs'],
  component: FormControl,
  args: {
    label: 'My Control',
    isDisabled: false,
    isInvalid: false,
    w: 96,
  },
};

export default meta;
type Story = StoryObj<typeof FormControl>;

const FormControlWithSliderComponent = (props: FormControlProps) => {
  const [value, setValue] = useState(0);
  return (
    <FormControl {...props}>
      <FormLabel>Some Value</FormLabel>
      <CompositeSlider value={value} min={0} max={10} step={1} onChange={setValue} />
    </FormControl>
  );
};
const FormControlVerticalWithSliderComponent = (props: FormControlProps) => {
  const [value, setValue] = useState(0);
  return (
    <FormControl {...props} orientation="vertical">
      <FormLabel>Some Value</FormLabel>
      <CompositeSlider value={value} min={0} max={10} step={1} onChange={setValue} />
    </FormControl>
  );
};

const FormControlWithSliderAndHelperTextComponent = (props: FormControlProps) => {
  const [value, setValue] = useState(0);
  return (
    <FormControl {...props} orientation="vertical">
      <FormLabel>Some Value</FormLabel>
      <CompositeSlider value={value} min={0} max={10} step={1} onChange={setValue} />
      <FormHelperText>This is some helpful text</FormHelperText>
    </FormControl>
  );
};

const FormControlWithNumberInputComponent = (props: FormControlProps) => {
  const [value, setValue] = useState(0);
  return (
    <FormControl {...props}>
      <FormLabel>Some Value</FormLabel>
      <CompositeNumberInput value={value} min={0} max={10} step={1} onChange={setValue} />
    </FormControl>
  );
};

// const options: InvSelectOption[] = [
//   {
//     value: 'chocolate',
//     label: 'Chocolate',
//   },
//   {
//     value: 'strawberry',
//     label: 'Strawberry',
//   },
//   {
//     value: 'vanilla',
//     label: 'Vanilla',
//   },
// ];
// const FormControlWithSelectComponent = (props: FormControlProps) => {
//   return (
//     <FormControl {...props}>
//       <InvSelect defaultValue={options[0]} options={options} />
//     </FormControl>
//   );
// };

export const FormControlWithSlider: Story = {
  render: FormControlWithSliderComponent,
};

export const FormControlVerticalWithSlider: Story = {
  render: FormControlVerticalWithSliderComponent,
};

export const FormControlWithSliderAndHelperText: Story = {
  render: FormControlWithSliderAndHelperTextComponent,
};

export const FormControlWithNumberInput: Story = {
  render: FormControlWithNumberInputComponent,
};

// export const FormControlWithSelect: Story = {
//   render: FormControlWithSelectComponent,
// };
