import { keyframes } from '@chakra-ui/react';
import type { Keyframes } from '@emotion/react';

export const spinKeyframes: Keyframes = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const spinAnimation = `${spinKeyframes} 1s linear infinite`;
