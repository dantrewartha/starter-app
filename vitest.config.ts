import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom', // Simulate a browser-like environment for DOM testing
    globals: true,
    setupFiles: './tests/setup.ts',
    include: ['**/__tests__/**/*.?(c|m)[jt]s?(x)', '**/?(*.)+(spec|test).?(c|m)[jt]s?(x)'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      exclude: ['node_modules/', 'tests/', '**/*.d.ts'],
    },
    server: {
      deps: {
        optimizer: {
          web: {
            include: ['vue', '@vue/test-utils'], // Replace deprecated deps.inline
          },
        },
      },
    },
    reporters: 'default',
    watch: false,
  },
});
