import type { Preview } from '@storybook/react';
import React from 'react';
import { ChakraProvider, DarkMode } from '@chakra-ui/react';

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
        <ChakraProvider>
          <DarkMode>
            <Story />
          </DarkMode>
        </ChakraProvider>
      );
    },
  ],
};

export default preview;
