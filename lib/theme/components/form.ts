import { formAnatomy as formParts, formErrorAnatomy as formErrorParts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const { definePartsStyle: defineFormPartsStyle, defineMultiStyleConfig: defineFormMultiStyleConfig } =
  createMultiStyleConfigHelpers(formParts.keys);

const formBaseStyle = defineFormPartsStyle((props) => ({
  container: {
    display: 'flex',
    flexDirection: props.orientation === 'vertical' ? 'column' : 'row',
    alignItems: props.orientation === 'vertical' ? 'flex-start' : 'center',
    gap: 4,
    h: 'unset',
    minH: 8,
    w: 'full',
    _invalid: {
      color: 'error.300',
    },
  },
  helperText: {
    w: 'full',
    fontSize: 'sm',
    color: 'base.400',
    m: 0,
  },
}));

export const formTheme = defineFormMultiStyleConfig({
  baseStyle: formBaseStyle,
});

const formLabelBaseStyle = defineStyle((props) => {
  return {
    mb: props.orientation === 'vertical' ? undefined : 0,
    fontSize: 'sm',
    fontWeight: 'semibold',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    alignItems: 'center',
    _disabled: {
      opacity: 0.4,
    },
    color: 'base.300',
    _invalid: {
      color: 'error.300',
    },
  };
});

export const formLabelTheme = defineStyleConfig({
  baseStyle: formLabelBaseStyle,
});

const { defineMultiStyleConfig: defineFormErrorMultiStyleConfig } = createMultiStyleConfigHelpers(formErrorParts.keys);

export const formErrorTheme = defineFormErrorMultiStyleConfig({
  baseStyle: {
    text: {
      color: 'error.300',
    },
  },
});
