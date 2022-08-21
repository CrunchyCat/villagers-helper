/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

import { clientsClaim } from 'workbox-core'
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'

declare const self: ServiceWorkerGlobalScope

clientsClaim()

// Precache all assets generated in the build process. Their URLs are injected into the manifest variable below. This
// variable must be somewhere in the service worker file, even if not using precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST)

// Set up App Shell-style routing, so that all navigation requests are fulfilled with your index.html shell (if true)
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$')
registerRoute(({ request, url }) => {
  // If this isn't a navigation, skip.
  if (request.mode !== 'navigate') return false

  // If this looks like a URL for a resource, because it contains a file extension, skip.
  if (url.pathname.match(fileExtensionRegexp)) return false

  return true // Return true to signal that we want to use the handler.
}, createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html'))

// This allows the web app to trigger skipWaiting via registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting()
})
