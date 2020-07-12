const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.common.js')
const devConfig = require('./webpack.dev.js')
const proConfig = require('./webpack.prod.js')

module.exports = (env, argv) => {
    let config = argv.mode === 'development' ? devConfig : proConfig;
    return merge(baseConfig, config);
};
