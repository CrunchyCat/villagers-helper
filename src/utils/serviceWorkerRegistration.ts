// This code registers a service worker meant to cache resources & trigger callbacks when those resources are updated.

type Config = {
  onCached?: (registration: ServiceWorkerRegistration) => void
  onUpdate?: (registration: ServiceWorkerRegistration) => void
}

// Register Service Worker
export function register(config?: Config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator)
    window.addEventListener('load', () => registerValidSW(config))
}

// Unregister Service Worker
export function unregister() {
  if ('serviceWorker' in navigator)
    navigator.serviceWorker.ready
      .then(registration => registration.unregister())
      .catch(error => console.error(error.message))
}

function registerValidSW(config?: Config) {
  navigator.serviceWorker
    .register(`${process.env.PUBLIC_URL}/service-worker.js`)
    .then(registration => {
      registration.onupdatefound = () => {
        const installStatus = registration.installing
        if (installStatus == null) return

        installStatus.onstatechange = () => {
          if (installStatus.state !== 'installed') return // Not installed

          if (navigator.serviceWorker.controller) {
            // New content is available to be cached
            console.log('Close all tabs of this page to get new content.')
            if (config?.onUpdate) config?.onUpdate(registration) // Execute onUpdate callback
          } else {
            // New content was cached
            console.log('Content is cached for offline use.')
            if (config?.onCached) config.onCached(registration) // Execute onCached callback
          }
        }
      }
    })
    .catch(e => console.error('Error during service worker registration:', e))
}
