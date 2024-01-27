import { RangeSliderMark as ChakraRangeSliderMark } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { typedMemo } from '../../util';
import type { SliderMarkProps } from './slider-mark';
import { sliderMarkStyles } from './slider-mark-styles';

export type RangeSliderMarkProps = SliderMarkProps;

export const RangeSliderMark = typedMemo(({ value, label, index, total }: RangeSliderMarkProps) => {
  if (index === 0) {
    return (
      <ChakraRangeSliderMark
        as={motion.div}
        initial={sliderMarkStyles.initialFirstLast}
        animate={sliderMarkStyles.animateFirstLast}
        exit={sliderMarkStyles.exitFirstLast}
        key={value}
        value={value}
        sx={sliderMarkStyles.firstMarkStyle}
      >
        {label}
      </ChakraRangeSliderMark>
    );
  }

  if (index === total - 1) {
    return (
      <ChakraRangeSliderMark
        as={motion.div}
        initial={sliderMarkStyles.initialFirstLast}
        animate={sliderMarkStyles.animateFirstLast}
        exit={sliderMarkStyles.exitFirstLast}
        key={value}
        value={value}
        sx={sliderMarkStyles.lastMarkStyle}
      >
        {label}
      </ChakraRangeSliderMark>
    );
  }

  return (
    <ChakraRangeSliderMark
      as={motion.div}
      initial={sliderMarkStyles.initialOther}
      animate={sliderMarkStyles.animateOther}
      exit={sliderMarkStyles.exitOther}
      key={value}
      value={value}
    >
      {label}
    </ChakraRangeSliderMark>
  );
});

RangeSliderMark.displayName = 'RangeSliderMark';
