import { SliderMark as ChakraSliderMark } from '@chakra-ui/react';
import type { SystemStyleObject } from '@chakra-ui/styled-system';
import type { MotionProps } from 'framer-motion';
import { motion } from 'framer-motion';

import { typedMemo } from '../../util';

const initialFirstLast: MotionProps['initial'] = { opacity: 0, y: 10 };
const initialOther = { ...initialFirstLast, x: '-50%' };

const animateFirstLast: MotionProps['animate'] = {
  opacity: 1,
  y: 0,
  transition: { duration: 0.2, ease: 'easeOut' },
};
const animateOther: MotionProps['animate'] = { ...animateFirstLast, x: '-50%' };

const exitFirstLast: MotionProps['exit'] = {
  opacity: 0,
  y: 10,
  transition: { duration: 0.2, ease: 'anticipate' },
};
const exitOther: MotionProps['exit'] = { ...exitFirstLast, x: '-50%' };

const firstMarkStyle: SystemStyleObject = {
  insetInlineStart: '0 !important',
  insetInlineEnd: 'unset !important',
};
const lastMarkStyle: SystemStyleObject = {
  insetInlineStart: 'unset !important',
  insetInlineEnd: '0 !important',
};

type SliderMarkAnimationOptions = {
  initialFirstLast: MotionProps['initial'];
  initialOther: MotionProps['initial'];
  exitFirstLast: MotionProps['exit'];
  exitOther: MotionProps['exit'];
  animateFirstLast: MotionProps['animate'];
  animateOther: MotionProps['animate'];
  firstMarkStyle: SystemStyleObject;
  lastMarkStyle: SystemStyleObject;
};

export const sliderMarkAnimationConstants: SliderMarkAnimationOptions = {
  initialFirstLast,
  initialOther,
  exitFirstLast,
  exitOther,
  animateFirstLast,
  animateOther,
  firstMarkStyle,
  lastMarkStyle,
} as const;

export type SliderMarkProps = {
  value: number;
  label: string;
  index: number;
  total: number;
};

export const SliderMark = typedMemo(({ value, label, index, total }: SliderMarkProps) => {
  if (index === 0) {
    return (
      <ChakraSliderMark
        as={motion.div}
        initial={sliderMarkAnimationConstants.initialFirstLast}
        animate={sliderMarkAnimationConstants.animateFirstLast}
        exit={sliderMarkAnimationConstants.exitFirstLast}
        key={value}
        value={value}
        sx={sliderMarkAnimationConstants.firstMarkStyle}
      >
        {label}
      </ChakraSliderMark>
    );
  }

  if (index === total - 1) {
    return (
      <ChakraSliderMark
        as={motion.div}
        initial={sliderMarkAnimationConstants.initialFirstLast}
        animate={sliderMarkAnimationConstants.animateFirstLast}
        exit={sliderMarkAnimationConstants.exitFirstLast}
        key={value}
        value={value}
        sx={sliderMarkAnimationConstants.lastMarkStyle}
      >
        {label}
      </ChakraSliderMark>
    );
  }

  return (
    <ChakraSliderMark
      as={motion.div}
      initial={sliderMarkAnimationConstants.initialOther}
      animate={sliderMarkAnimationConstants.animateOther}
      exit={sliderMarkAnimationConstants.exitOther}
      key={value}
      value={value}
    >
      {label}
    </ChakraSliderMark>
  );
});

SliderMark.displayName = 'SliderMark';
