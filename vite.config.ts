import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

const APP_HOST_NAME = 'localhost';
const APP_BASE_URL = '/';
const APP_PORT_NUMBER = 4300;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: APP_PORT_NUMBER,
    host: `${APP_HOST_NAME}`,
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  base: `${APP_BASE_URL}`,
});
