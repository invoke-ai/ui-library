import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(cardAnatomy.keys);

export const variantLora = definePartsStyle({
  container: {
    backgroundColor: 'base.750',
    p: 4,
    gap: 2,
    borderRadius: 'base',
    minW: 64,
    flexBasis: 1,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    p: 0,
    fontSize: 'md',
    fontWeight: 'semibold',
  },
  body: {
    p: 0,
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
  footer: {
    p: 0,
  },
});

export const cardTheme = defineMultiStyleConfig({
  variants: { lora: variantLora },
});
