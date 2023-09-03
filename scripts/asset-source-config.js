function assetSourceConfig(config) {
  config.module.rules.push({
    test: /\.(png|svg|gif|jpe?g)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'img/[name].[hash:6][ext]',
    },
  });
  return config;
}

module.exports = assetSourceConfig;
