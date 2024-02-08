const NextFederationPlugin = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;
    if(!isServer) {

      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          remotes: {
            remote: `remote@http://localhost:4000/remoteEntry.a350ed3e.js`,
          },
          filename: 'static/chunks/remoteEntry.a350ed3e.js',
        }),
        );
        
      }
      return config;
  },
};

module.exports = nextConfig;
