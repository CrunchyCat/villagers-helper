/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate code.
 */

import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import * as React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { Provider } from 'react-redux'
// import FontFaceObserver from 'fontfaceobserver' //TODO: Observe font loading (1/2)

import 'sanitize.css/sanitize.css' // Use consistent styling

import { App } from 'app' // Import root app

import { HelmetProvider } from 'react-helmet-async'

import { configureAppStore } from 'store/configureStore'

import { ThemeProvider } from 'styles/theme/ThemeProvider'

import * as serviceWorkerRegistration from 'utils/serviceWorkerRegistration' //TODO: Enable service worker (1/2)
import reportWebVitals from 'reportWebVitals'

// Initialize languages
import './locales/i18n'

/* //TODO: Observe font loading (2/2)
const openSansObserver = new FontFaceObserver('Inter', {}) // Observe loading of Inter

openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded') // When Inter is loaded, add a font-family using Inter to the body
})
*/

const store = configureAppStore()
const MOUNT_NODE = document.getElementById('root') as HTMLElement

ReactDOMClient.createRoot(MOUNT_NODE!).render(
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

// Register Service Worker for Offline Support
serviceWorkerRegistration.register() //TODO: Enable service worker (2/2)

// If you want to start measuring performance in your app, send to an analytics endpoint or pass a function to log
// results (for example: reportWebVitals(console.log)). Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
