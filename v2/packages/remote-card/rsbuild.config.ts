import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      exposes: {
        './Card': './src/Card/index.tsx',
      },
      name: 'mf_card',
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3000,
  },
});
