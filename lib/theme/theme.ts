import type { ThemeOverride } from '@chakra-ui/react';

import { buttonTheme } from '../components/button/theme';
import { headingTheme } from '../components/heading/theme';
import { tooltipTheme } from '../components/tooltip/theme';

export const theme: ThemeOverride = {
  components: {
    Button: buttonTheme,
    Heading: headingTheme,
    Tooltip: tooltipTheme,
  },
};
