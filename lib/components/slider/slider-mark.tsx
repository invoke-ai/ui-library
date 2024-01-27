import { SliderMark as ChakraSliderMark } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { typedMemo } from '../../util';
import { sliderMarkStyles } from './slider-mark-styles';

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
        initial={sliderMarkStyles.initialFirstLast}
        animate={sliderMarkStyles.animateFirstLast}
        exit={sliderMarkStyles.exitFirstLast}
        key={value}
        value={value}
        sx={sliderMarkStyles.firstMarkStyle}
      >
        {label}
      </ChakraSliderMark>
    );
  }

  if (index === total - 1) {
    return (
      <ChakraSliderMark
        as={motion.div}
        initial={sliderMarkStyles.initialFirstLast}
        animate={sliderMarkStyles.animateFirstLast}
        exit={sliderMarkStyles.exitFirstLast}
        key={value}
        value={value}
        sx={sliderMarkStyles.lastMarkStyle}
      >
        {label}
      </ChakraSliderMark>
    );
  }

  return (
    <ChakraSliderMark
      as={motion.div}
      initial={sliderMarkStyles.initialOther}
      animate={sliderMarkStyles.animateOther}
      exit={sliderMarkStyles.exitOther}
      key={value}
      value={value}
    >
      {label}
    </ChakraSliderMark>
  );
});

SliderMark.displayName = 'SliderMark';
