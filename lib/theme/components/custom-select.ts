import type { SystemStyleObject } from '@chakra-ui/styled-system';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const helpers = createMultiStyleConfigHelpers(['root', 'content']);
const transitionProps: SystemStyleObject = {
  transitionProperty: 'common',
  transitionDuration: 'normal',
};

export const customSelectTheme: ReturnType<typeof helpers.defineMultiStyleConfig> = helpers.defineMultiStyleConfig({
  baseStyle: {
    root: {
      ...transitionProps,
      w: 'full',
      '[data-part="control"]': {
        ...transitionProps,
        w: 'full',
        alignItems: 'center',
        gap: 2,
      },
      '[data-part="trigger"]': {
        ...transitionProps,
        gap: 4,
        alignItems: 'center',
        bg: 'base.700',
        w: 'full',
        h: '28px',
        py: 1,
        px: 4,
        borderRadius: 'base',
        _hover: {
          bg: 'base.650',
        },
        '&[data-disabled]': {
          opacity: 0.5,
          cursor: 'not-allowed',
          _hover: {
            bg: 'base.700',
          },
        },
        '&[data-invalid]': {
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'error.500',
        },
      },
      '[data-placeholder-shown]': {
        '[data-part="value-text"]': {
          color: 'base.400',
        },
      },
      '[data-part="value-text"]': {
        ...transitionProps,
        w: 'full',
        h: 'full',
        alignItems: 'center',
        fontSize: 'sm',
      },
      '[data-part="indicator"]': { svg: { boxSize: 4 } },
      '[data-part="clear-trigger"]': {
        // unused - ark requires the clear trigger be within the trigger component, but this makes it difficult to control
        // the width of the content. we are manually handling the clear button by placing it outside the trigger. so, this
        // styling does not apply.
      },
    },
    content: {
      ...transitionProps,
      outline: 'none !important',
      flexDir: 'column',
      bg: 'base.800',
      p: 2,
      gap: 1,
      borderRadius: 'base',
      maxH: 96,
      overflowY: 'scroll',
      "&[data-state='open']": {
        //
      },
      "&[data-state='closed']": {
        //
      },
      '[data-part="item-group"]': { ...transitionProps, flexDir: 'column', gap: 1 },
      '[data-part="item-group-label"]': {
        ...transitionProps,
        py: 1,
        px: 2,
        color: 'base.400',
        fontWeight: 'semibold',
      },
      '[data-part="item"]': {
        ...transitionProps,
        alignItems: 'center',
        borderRadius: 'base',
        py: 1,
        px: 2,
        cursor: 'pointer',
        '&[data-highlighted]': {
          bg: 'base.700',
        },
        '&[data-state="checked"]': {
          bg: 'invokeBlue.300',
          '[data-part="item-text"]': {
            '[data-part="item-text-label"]': { color: 'base.900' },
            '[data-part="item-text-description"]': { color: 'base.900' },
          },
        },
        '&[data-state="checked"][data-highlighted]': {
          bg: 'invokeBlue.200',
        },
        '[data-part="item-text"]': {
          ...transitionProps,
          flexDir: 'column',
          w: 'full',
          '[data-part="item-text-label"]': {
            fontWeight: 'semibold',
          },
          '[data-part="item-text-description"]': { color: 'base.300' },
        },
        '&[data-disabled]': {
          cursor: 'not-allowed',
          color: 'base.500',
          '[data-part="item-text"]': {
            '[data-part="item-text-description"]': { color: 'base.500' },
          },
        },
      },
    },
  },
});
