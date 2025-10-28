import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    globals: true,
    coverage: {
      provider: 'istanbul', // built-in coverage provider
      reporter: ['text', 'html'], // output in terminal + HTML report
      all: true, // collect coverage for all files, not just tested ones
      include: ['src/**/*.{ts,tsx}'], // files to include in coverage
      exclude: ['node_modules', 'tests', 'vite.config.ts'],
    },
  },
  server: {
    proxy: {
      // Proxy all requests starting with /api
      '/api': {
        target: 'http://localhost:8080', // Your Spring Boot backend address
        changeOrigin: true, // Needed for virtual hosting
        secure: false, // Set to false if your backend is HTTP (recommended for dev)
      },
    },
  },
});
