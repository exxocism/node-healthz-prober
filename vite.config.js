import { defineConfig, loadEnv } from 'vite';
import commonjs from '@rollup/plugin-commonjs';

export default ({ mode }) => {
  return defineConfig({
    build: {
      rollupOptions: {
        plugins: [commonjs()],
        input: 'dist/index.js',
        output: {
          manualChunks: false,
          inlineDynamicImports: true,
          entryFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
        },
      },
    },
    define: {
      'process.env': { ...loadEnv(mode, process.cwd()) },
    },
  });
};
