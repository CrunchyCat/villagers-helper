// This code registers a service worker meant to cache resources & trigger callbacks when those resources are updated.

type Config = {
  onCached?: (registration: ServiceWorkerRegistration) => void
  onUpdate?: (registration: ServiceWorkerRegistration) => void
}

// Register Service Worker
export function register(config?: Config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      //TODO: Replace with registerValidSW(config) when local testing is done
      if (window.location.hostname === 'localhost') {
        fetch(`${process.env.PUBLIC_URL}/service-worker.js`, {
          headers: { 'Service-Worker': 'script' }
        })
          .then(res => {
            if (res.status === 404)
              navigator.serviceWorker.ready.then(reg =>
                reg.unregister().then(() => window.location.reload())
              )
            else registerValidSW(config) // Service worker found. Proceed as normal.
          })
          .catch(() => console.log('vilrs is running in offline mode'))
        navigator.serviceWorker.ready.then(() => console.log('served by sw')) // Localhost: Additional Logging
      } else registerValidSW(config) // Not Localhost: Register service worker
    })
  }
}

function registerValidSW(config?: Config) {
  navigator.serviceWorker
    .register(`${process.env.PUBLIC_URL}/service-worker.js`)
    .then(reg => {
      reg.onupdatefound = () => {
        const installStatus = reg.installing
        if (installStatus == null) return

        installStatus.onstatechange = () => {
          if (installStatus.state !== 'installed') return // Not installed

          if (navigator.serviceWorker.controller) {
            // New content is available to be cached
            console.log('new content available! close all instances to update')
            if (config?.onUpdate) config?.onUpdate(reg) // Execute onUpdate callback
          } else {
            // New content was cached
            console.log('vilrs has been cached for offline use')
            if (config?.onCached) config.onCached(reg) // Execute onCached callback
          }
        }
      }
    })
    .catch(e => console.error('error during service worker registration', e))
}
