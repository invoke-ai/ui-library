import type { ThemeOverride } from '@chakra-ui/react';

export const shadows: ThemeOverride['shadows'] = {
  blue: '0 0 10px 0 var(--invoke-colors-blue-600)',
  blueHover: '0 0 10px 0 var(--invoke-colors-blue-500)',
  ok: '0 0 7px var(--invoke-colors-ok-400)',
  working: '0 0 7px var(--invoke-colors-working-400)',
  error: '0 0 7px var(--invoke-colors-error-400)',
  selected: '0px 0px 0px 1px var(--invoke-colors-base-900), 0px 0px 0px 4px var(--invoke-colors-blue-500)',
  hoverSelected: '0px 0px 0px 1px var(--invoke-colors-base-900), 0px 0px 0px 4px var(--invoke-colors-blue-400)',
  hoverUnselected: '0px 0px 0px 1px var(--invoke-colors-base-900), 0px 0px 0px 3px var(--invoke-colors-blue-400)',
  nodeSelected: '0 0 0 3px var(--invoke-colors-blue-500)',
  nodeHovered: '0 0 0 2px var(--invoke-colors-blue-400)',
  nodeHoveredSelected: '0 0 0 3px var(--invoke-colors-blue-400)',
  nodeInProgress: '0 0 0 2px var(--invoke-colors-yellow-400), 0 0 20px 2px var(--invoke-colors-orange-700)',
};
