import type { SystemStyleObject } from '@chakra-ui/styled-system';

export const layerStyles: Record<string, SystemStyleObject> = {
  body: {
    bg: 'base.900',
    color: 'base.50',
  },
  first: {
    bg: 'base.850',
    color: 'base.50',
  },
  second: {
    bg: 'base.800',
    color: 'base.50',
  },
  third: {
    bg: 'base.700',
    color: 'base.50',
  },
  nodeBody: {
    bg: 'base.800',
    color: 'base.100',
  },
  nodeHeader: {
    bg: 'base.900',
    color: 'base.100',
  },
  nodeFooter: {
    bg: 'base.900',
    color: 'base.100',
  },
  danger: {
    color: 'error.500 !important',
  },
};
