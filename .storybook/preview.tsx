import { ChakraProvider, DarkMode, extendTheme } from '@chakra-ui/react';
import type { Preview } from '@storybook/react';
import React from 'react';
import { Flex } from '../lib/chakra-re-exports';
import { theme as invokeTheme } from '../lib/theme/';

import '@fontsource-variable/inter';

const theme = extendTheme(invokeTheme);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <ChakraProvider theme={theme}>
          <DarkMode>
            <Flex layerStyle="body" p={8}>
              <Story />
            </Flex>
          </DarkMode>
        </ChakraProvider>
      );
    },
  ],
};

export default preview;
