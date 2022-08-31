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
  },
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          // Find the terser plugin by looking for "extractComments"
          const i = webpackConfig.optimization.minimizer.findIndex(
            x => x.options.extractComments
          )
          if (i !== -1) {
            webpackConfig.optimization.minimizer[i].options.minimizer.options =
              {
                ...webpackConfig.optimization.minimizer[i].options.minimizer
                  .options,
                compress: {
                  ecma: 8,
                  // Disabled because it breaks valid code: https://github.com/facebook/create-react-app/issues/5250
                  // Pending further investigation: https://github.com/terser-js/terser/issues/120
                  inline: 2,
                  passes: 3,
                  pure_getters: true,
                  unsafe: true,
                  warnings: false
                },
                mangle: {
                  safari10: false
                },
                output: {
                  // On because emoji+regex are broken https://github.com/facebook/create-react-app/issues/2488
                  ascii_only: true,
                  comments: false,
                  ecma: 8,
                  wrap_func_args: false
                }
              }
          }
          return webpackConfig
        }
      }
    }
  ]
}
