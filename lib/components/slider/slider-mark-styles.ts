import type { SystemStyleObject } from '@chakra-ui/styled-system';
import type { MotionProps } from 'framer-motion';

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

export const sliderMarkStyles: SliderMarkAnimationOptions = {
  initialFirstLast,
  initialOther,
  exitFirstLast,
  exitOther,
  animateFirstLast,
  animateOther,
  firstMarkStyle,
  lastMarkStyle,
} as const;
