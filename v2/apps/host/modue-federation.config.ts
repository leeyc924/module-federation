import type { Rspack } from '@rsbuild/core';
import { dependencies } from './package.json';

export const mfConfig: Rspack.ModuleFederationPluginOptions = {
  name: 'host',
  remotes: {
    remote: 'remote@http://localhost:3002/remoteEntry.js',
  },
  shared: {
    ...dependencies,
    react: {
      requiredVersion: dependencies.react,
      singleton: true,
    },
    'react-dom': {
      requiredVersion: dependencies['react-dom'],
      singleton: true,
    },
  },
};
