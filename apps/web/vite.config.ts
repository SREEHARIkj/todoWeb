/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env': env,
    },
    server: {
      host: true,
    },
    preview: {
      port: 5000,
      host: true,
    },
    test: {
      exclude: [...configDefaults.exclude],
      environment: 'jsdom',
      globals: true,
      mockReset: true,
      clearMocks: true,
      restoreMocks: true,
      // setupFiles: "./src/__tests__/setup.ts",
      css: true,
      coverage: {
        provider: 'v8',
        exclude: ['./src/__tests__'],
        reportsDirectory: './src/__tests__/vitest/coverage',
        reporter: ['text', 'json', 'html'],
        all: true,
        thresholds: {
          lines: 85,
          functions: 85,
          branches: 85,
          statements: 85,
        },
      },
    },
    plugins: [react()],
  };
});
