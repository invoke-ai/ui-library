import { RangeSliderMark as ChakraRangeSliderMark } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { typedMemo } from '../../util';
import type { SliderMarkProps } from './slider-mark';
import { sliderMarkAnimationConstants } from './slider-mark';

export type RangeSliderMarkProps = SliderMarkProps;

export const RangeSliderMark = typedMemo(({ value, label, index, total }: RangeSliderMarkProps) => {
  if (index === 0) {
    return (
      <ChakraRangeSliderMark
        as={motion.div}
        initial={sliderMarkAnimationConstants.initialFirstLast}
        animate={sliderMarkAnimationConstants.animateFirstLast}
        exit={sliderMarkAnimationConstants.exitFirstLast}
        key={value}
        value={value}
        sx={sliderMarkAnimationConstants.firstMarkStyle}
      >
        {label}
      </ChakraRangeSliderMark>
    );
  }

  if (index === total - 1) {
    return (
      <ChakraRangeSliderMark
        as={motion.div}
        initial={sliderMarkAnimationConstants.initialFirstLast}
        animate={sliderMarkAnimationConstants.animateFirstLast}
        exit={sliderMarkAnimationConstants.exitFirstLast}
        key={value}
        value={value}
        sx={sliderMarkAnimationConstants.lastMarkStyle}
      >
        {label}
      </ChakraRangeSliderMark>
    );
  }

  return (
    <ChakraRangeSliderMark
      as={motion.div}
      initial={sliderMarkAnimationConstants.initialOther}
      animate={sliderMarkAnimationConstants.animateOther}
      exit={sliderMarkAnimationConstants.exitOther}
      key={value}
      value={value}
    >
      {label}
    </ChakraRangeSliderMark>
  );
});

RangeSliderMark.displayName = 'RangeSliderMark';
