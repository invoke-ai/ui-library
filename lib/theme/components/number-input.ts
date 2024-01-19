import { numberInputAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

import { getInputFilledStyles } from '../util/getInputFilledStyles';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const filled = definePartsStyle((props) => {
  return {
    root: { h: '28px' },
    field: { ...getInputFilledStyles(props), pe: 6, h: 'full' },
    stepperGroup: {
      border: 'none',
      w: 6,
    },
    stepper: {
      color: 'base.200',
      _hover: {
        bg: 'base.700',
        color: 'base.100',
      },
      _disabled: {
        _hover: {
          bg: 'base.800',
          color: 'base.200',
        },
      },
      _first: {
        border: 'none',
        margin: 0,
        borderTopEndRadius: 'base',
        borderBottomStartRadius: 'base',
      },
      _last: {
        border: 'none',
        margin: 0,
        borderBottomEndRadius: 'base',
        borderTopStartRadius: 'base',
      },
    },
  };
});

const variantIterations = definePartsStyle((props) => {
  return {
    root: { h: '28px' },
    field: {
      ...getInputFilledStyles(props),
      pe: 6,
      ps: 6,
      borderInlineStartRadius: 'base',
      h: 'full',
      textAlign: 'center',
      fontSize: 'md',
      fontWeight: 'semibold',
    },
    stepperGroup: {
      border: 'none',
      w: 6,
    },
    stepper: {
      color: 'base.200',
      _hover: {
        bg: 'base.700',
        color: 'base.100',
      },
      _disabled: {
        _hover: {
          bg: 'base.800',
          color: 'base.200',
        },
      },
      _first: {
        border: 'none',
        margin: 0,
        borderTopEndRadius: 'base',
        borderBottomStartRadius: 'base',
      },
      _last: {
        border: 'none',
        margin: 0,
        borderBottomEndRadius: 'base',
        borderTopStartRadius: 'base',
      },
    },
  };
});

export const numberInputTheme: ReturnType<typeof defineMultiStyleConfig> = defineMultiStyleConfig({
  variants: {
    filled,
    darkFilled: filled,
    iterations: variantIterations,
  },
  defaultProps: {
    size: 'sm',
    variant: 'filled',
  },
});
