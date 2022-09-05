export const enum StyleConstants {
  BROWSER_BAR_HEIGHT = '80px',

  STATUS_BAR_HEIGHT = 'env(safe-area-inset-top) * 0.75', // Put inside calc()
  NAV_BAR_HEIGHT = '3.5rem',
  COMBINED_BAR_HEIGHT = '(3.5rem + env(safe-area-inset-top) * 0.75)' // Put inside calc()
}
