import react from '@vitejs/plugin-react';
import { glob } from 'glob';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), dts({ exclude: ['**/*.stories.tsx'] })],
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
      input: Object.fromEntries(
        glob
          .sync('lib/**/*.{ts,tsx}', {
            // we don't want test files included
            ignore: ['lib/**/*.spec.tsx', 'lib/__mocks__/*', 'lib/**/*.stories.*'],
          })
          .map((file) => [
            // The name of the entry point
            // lib/nested/foo.ts becomes nested/foo
            relative('lib', file.slice(0, file.length - extname(file).length)),
            // The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
    },
    sourcemap: true,
  },
});
