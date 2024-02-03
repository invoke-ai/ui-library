import type { SystemStyleObject } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { PiHourglassMediumFill, PiSpinnerBold } from 'react-icons/pi';

import { spinAnimation } from '.';
import { spinWithPauseAnimation } from './animations';

const meta: Meta<typeof IconButton> = {
  title: 'Animations',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

const spin: SystemStyleObject = {
  svg: { animation: spinAnimation },
};

const spinWithPause: SystemStyleObject = {
  svg: { animation: spinWithPauseAnimation },
};

const Component = () => {
  return (
    <>
      <IconButton aria-label="label" icon={<PiSpinnerBold />} sx={spin} />
      <IconButton aria-label="label" icon={<PiHourglassMediumFill />} sx={spinWithPause} />
    </>
  );
};

export const Default: Story = {
  render: Component,
};
