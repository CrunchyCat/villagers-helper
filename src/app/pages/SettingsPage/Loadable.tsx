/**
 * Asynchronously loads the component for SettingsPage
 */

import * as React from 'react'
import { lazyLoad } from 'utils/loadable'
import { LoadingPage } from 'app/pages/LoadingPage'

export const SettingsPage = lazyLoad(
  () => import('./index'),
  module => module.SettingsPage,
  { fallback: <LoadingPage /> }
)
