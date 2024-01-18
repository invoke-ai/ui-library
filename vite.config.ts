import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ exclude: ['**/*.stories.tsx', 'lib/inv-*/theme.ts'] })],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        '@chakra-ui/anatomy',
        '@chakra-ui/icons',
        '@chakra-ui/layout',
        '@chakra-ui/portal',
        '@chakra-ui/react',
        '@chakra-ui/styled-system',
        '@chakra-ui/theme-tools',
        '@emotion/react',
        '@emotion/styled',
        '@fontsource-variable/inter',
        'framer-motion',
        'react',
        'react/jsx-runtime',
        'react-dom',
      ],
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
    sourcemap: true,
  },
});
