const {
  override,
  overrideDevServer,
  addWebpackPlugin,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addWebpackModuleRule,
  setWebpackOptimizationSplitChunks,
} = require('customize-cra');
const removeManifest = () => (config) => {
  config.plugins = config.plugins.filter((p) => p.constructor.name !== 'ManifestPlugin');
  return config;
};
const isProduction = process.env.NODE_ENV === 'production';
const addProxy = () => (configFunction) => {
  configFunction.proxy = {
    '/gateway/': {
      target: process.env.REACT_APP_API_HOST,
      changeOrigin: true,
      secure: false,
    },
  };

  return configFunction;
};

module.exports = {
  webpack: override(
    // removeManifest(),
    isProduction &&
      setWebpackOptimizationSplitChunks({
        chunks: 'all',
        minSize: 50000,
        maxSize: 100000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            name: 'common',
            chunks: 'initial',
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      })
  ),
  devServer: overrideDevServer(addProxy()),
};
