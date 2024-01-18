import type { ThemeOverride } from '@chakra-ui/react';

import { buttonTheme } from '../inv-button/theme';
import { headingTheme } from '../inv-heading/theme';
import { tooltipTheme } from '../inv-tooltip/theme';

export const theme: ThemeOverride = {
  components: {
    Button: buttonTheme,
    Heading: headingTheme,
    Tooltip: tooltipTheme,
  },
};
