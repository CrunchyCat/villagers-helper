module.exports = {
  styledComponents: {
    displayName: process.env.NODE_ENV !== 'production',
    transpileTemplateLiterals: false,
    ssr: false // Can cause errors during hydration
  }
}
