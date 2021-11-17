import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
const path = require('path');
const reactSvgPlugin = require('vite-plugin-react-svg');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, '/src') }],
  },
  plugins: [
    reactRefresh(),
    reactSvgPlugin({
      // Default behavior when importing `.svg` files, possible options are: 'url' and `component`
      defaultExport: 'url',
    }),
  ],

  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['react-helmet-async'],
    },
  },
  publicDir: 'public',
  server: {
    watch: {
      usePolling: true,
    },
  },
});
