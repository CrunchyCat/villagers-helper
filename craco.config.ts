import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

module.exports = {
  babel: {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true
        }
      ]
    ]
  },
  webpack: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat'
    },
    plugins: process.env.ANALYZE === 'true' ? [new BundleAnalyzerPlugin()] : []
  }
}
