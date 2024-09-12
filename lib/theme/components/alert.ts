import { alertAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle(() => ({
  container: {
    borderRadius: 'base',
    fontSize: 'sm',
    shadow: 'md',
  },
}));

export const alertTheme = defineMultiStyleConfig({
  baseStyle,
});
