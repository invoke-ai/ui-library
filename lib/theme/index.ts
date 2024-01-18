import type { ThemeOverride } from '@chakra-ui/react';

import { buttonTheme } from '../button/theme';
import { headingTheme } from '../heading/theme';
import { tooltipTheme } from '../tooltip/theme';

export const theme: ThemeOverride = {
  components: {
    Button: buttonTheme,
    Heading: headingTheme,
    Tooltip: tooltipTheme,
  },
};
