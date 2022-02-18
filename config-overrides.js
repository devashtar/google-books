const { resolve } = require('path')

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@types': resolve(__dirname, 'src/types'),
      '@store': resolve(__dirname, 'src/store'),
      '@components': resolve(__dirname, 'src/components'),
      '@containers': resolve(__dirname, 'src/containers'),
      '@theme': resolve(__dirname, 'src/theme'),
      '@types': resolve(__dirname, 'src/types')
    }
  }

  return config
}
