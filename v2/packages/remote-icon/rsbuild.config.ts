import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      exposes: {
        './Icon': './src/Icon/index.tsx',
      },
      name: 'mf_icon',
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 4000,
  },
});
