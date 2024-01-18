import { checkboxAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const control = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    bg: 'base.700',
    borderColor: 'base.600',
    color: 'base.100',

    _checked: {
      bg: `${c}.500`,
      borderColor: `${c}.500`,
      color: `${c}.100`,

      _hover: {
        bg: `${c}.500`,
        borderColor: `${c}.500`,
      },

      _disabled: {
        borderColor: 'transparent',
        bg: 'whiteAlpha.300',
        color: 'whiteAlpha.500',
      },
    },

    _indeterminate: {
      bg: `${c}.600`,
      borderColor: `${c}.600`,
      color: `${c}.100`,
    },

    _disabled: {
      bg: 'whiteAlpha.100',
      borderColor: 'transparent',
    },

    _focusVisible: {
      boxShadow: 'none',
      outline: 'none',
    },

    _invalid: {
      borderColor: 'error.300',
    },
  };
});

const baseStyle = definePartsStyle((props) => ({
  control: control(props),
}));

export const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
  defaultProps: {
    colorScheme: 'invokeBlue',
  },
});
