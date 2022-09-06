import { CracoConfig } from '@craco/craco/dist/types/config'
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
    plugins: process.env.ANALYZE === 'true' && [new BundleAnalyzerPlugin()]
  },
  plugins: process.env.NODE_ENV === 'production' &&
    process.env.ANALYZE !== 'true' && [
      {
        plugin: {
          overrideWebpackConfig: ({ webpackConfig }) => {
            // Flatten Build File Structure //TODO: hash:1 or 2 will save but is dangerous
            webpackConfig!.output!.filename = '[contenthash:4].js'
            webpackConfig!.output!.chunkFilename = '[contenthash:4].js'
            webpackConfig!.output!.assetModuleFilename = '[hash:6][ext]'
            const rules = webpackConfig!.module!.rules as any
            rules
              .find(x => x.oneOf)
              .oneOf.find(x => x.use)
              .use.find(x => x.options?.name).options.name = '[hash:6].[ext]'
            const miniCss: any = webpackConfig!.plugins!.find(
              (x: any) => x.options?.filename && x.options?.chunkFilename
            )
            miniCss.options.filename = '[contenthash:4].css'
            miniCss.options.chunkFilename = '[contenthash:4].css'

            // Improve Terser File Minimization
            const terser: any = webpackConfig?.optimization?.minimizer?.find(
              x => (x as any).options.extractComments // Find Terser: lookup "extractComments"
            )
            if (terser) {
              terser.options.extractComments = false // Removes 54 bytes of LICENSE
              terser.options.minimizer.options = {
                ...terser.options.minimizer.options,
                compress: {
                  ecma: 8, // Not 5, because I don't care to support IE11
                  inline: 2, // Breaks code according to CRA
                  passes: 3,
                  pure_getters: true,
                  unsafe: true, // Remove this if it causes errors (it might)
                  warnings: false
                },
                mangle: {
                  safari10: false // Use this if you don't care to support iOS/Safari <=11
                },
                output: {
                  // On because emoji+regex are broken https://github.com/facebook/create-react-app/issues/2488
                  ascii_only: true,
                  comments: false,
                  ecma: 8, // Not 5, because I don't care to support IE11
                  wrap_func_args: false
                }
              }
            }
            return webpackConfig
          }
        }
      }
    ]
} as CracoConfig
