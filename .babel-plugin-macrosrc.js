module.exports = {
  styledComponents: {
    displayName: process.env.NODE_ENV !== 'production',
    ssr: false // Can cause errors during hydration
  }
}
