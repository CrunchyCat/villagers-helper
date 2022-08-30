/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate code.
 */

import 'core-js/stable'

import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
// import FontFaceObserver from 'fontfaceobserver' //TODO: Observe font loading (1/2)

// import 'sanitize.css/sanitize.css'
import 'styles/custom-sanitize.css' // Cut down version of sanitize.css

import { App } from 'app' // Import root app

import { HelmetProvider } from 'react-helmet-async'

import { configureAppStore } from 'store/configureStore'
import { ThemeProvider } from 'styles/theme/ThemeProvider'

import './locales/i18n' // Initialize languages

/* //TODO: Observe font loading (2/2)
const openSansObserver = new FontFaceObserver('Inter', {}) // Observe loading of Inter

openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded') // When Inter is loaded, add a font-family using Inter to the body
})
*/

const store = configureAppStore()
const MOUNT_NODE = document.getElementById('root') as HTMLElement

createRoot(MOUNT_NODE!).render(
  <Provider store={store}>
    <ThemeProvider>
      <HelmetProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HelmetProvider>
    </ThemeProvider>
  </Provider>
)

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  })
}
