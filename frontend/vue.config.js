const { defineConfig } = require('@vue/cli-service')
module.exports = {
  configureWebpack: {
    resolve: {
      fallback: {
        "fs": false,
        "tls": false,
        "net": false,
        "path": false,
        "zlib": false,
        "http": false,
        "https": false,
        "stream": false,
        "crypto": false,
        "querystring": false,
        "url": false,
        "os": require.resolve("os-browserify/browser"),
        "assert": false,
        "constants": false,
        "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
      } 
    }
  }
}
