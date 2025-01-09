import type { Keyframes } from '@emotion/react';
import { keyframes } from '@emotion/react';

export const spinKeyframes: Keyframes = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const spinAnimation = `${spinKeyframes} 1s linear infinite`;

// Rotate 180deg, pause, rotate 180deg, pause, repeat
export const spinWithPauseKeyframes: Keyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }
  20%, 50% {
    transform: rotate(180deg);
  }
  70%, 100% {
    transform: rotate(360deg);
  }
`;

export const spinWithPauseAnimation = `${spinWithPauseKeyframes} 4s ease infinite`;
