const path = require('path');

let config = {
  output: {
    path: path.resolve(__dirname, '../dist/CloudTools'), // 打包后文件的输出路径
    clean: true, // 清理打包后上次遗留的js和html文件
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [],
  },
};

const assetSourceConfig = require('./asset-source-config');
config = assetSourceConfig(config);

module.exports = config;
