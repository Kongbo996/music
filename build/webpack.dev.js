const { merge } = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    hot: true,
    port: 9001,
    disableHostCheck: true,
    open: false,
    proxy: {
      '/api': {
        target: 'https://netease-cloud-music-api-kongbo996.vercel.app',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
      }
    }
  }
})
