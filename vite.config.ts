import { defineConfig } from 'vite'
import { edgi } from './package.json';

let config = defineConfig({
  build: {
    minify: true,
    lib: {
        entry: 'dummy.ts',
        name: 'EdgiVnc',
        formats: ['es'],
        fileName: (_fmt, f) => f,
    },
    rollupOptions: {
      input: {
        [`main.js`]: "./index.html",
        [`connect-vnc.js`]: "./src/connect-vnc.ts",
      },
      output: {
        inlineDynamicImports: false,
      },
    },
  },
});

export default config;
